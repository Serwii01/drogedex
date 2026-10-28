#!/usr/bin/env node
// Importa un diseño de Drogedex que vive en su propio repo (drogedex-nave, drogedex-beton)
// como una sección de esta web bajo un prefijo de URL (/nave, /hormigon).
//
//   node scripts/importar-diseno.mjs <ruta-al-repo> <id> <prefijo>
//   node scripts/importar-diseno.mjs ../drogedex-nave nave /nave
//   node scripts/importar-diseno.mjs ../drogedex-beton hormigon /hormigon
//
// Qué hace:
//  - Copia layouts, componentes, estilos y lib propios a src/themes/<id>/ y las páginas a src/pages/<prefijo>/.
//  - Los datos (src/data) son compartidos: los imports a data/ apuntan a los de esta web.
//    Si el diseño tiene un fichero de datos que aquí no existe, se copia a src/themes/<id>/data/ y se avisa.
//  - Crea src/themes/<id>/data/interactions.ts con los colores de riesgo del diseño.
//  - Añade el prefijo a los enlaces internos con u() de src/themes/<id>/base.ts.
//  - Añade el selector de diseño y la URL canónica (la de la versión original) al layout.
// Se puede repetir: borra y vuelve a generar src/themes/<id>/ y src/pages/<prefijo>/.

import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const [, , repoArg, id, prefijo] = process.argv;
if (!repoArg || !id || !/^\/[a-z0-9-]+$/.test(prefijo ?? '')) {
  console.error('Uso: node scripts/importar-diseno.mjs <ruta-al-repo> <id> </prefijo>');
  process.exit(1);
}

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'src');
const VAR = join(resolve(repoArg), 'src');
const THEME = join(SRC, 'themes', id);
const PAGES = join(SRC, 'pages', prefijo.slice(1));
const posix = (p) => p.split(sep).join('/');
const avisos = [];

if (!existsSync(join(VAR, 'pages'))) throw new Error(`No encuentro ${VAR}/pages`);

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
const same = (a, b) => existsSync(a) && existsSync(b) && readFileSync(a).equals(readFileSync(b));

// ---------- 1. Copiar ----------
rmSync(THEME, { recursive: true, force: true });
rmSync(PAGES, { recursive: true, force: true });
mkdirSync(THEME, { recursive: true });

/** origen (en el repo del diseño) -> destino (aquí) */
const copied = new Map();
for (const dir of ['layouts', 'components', 'styles', 'lib']) {
  if (!existsSync(join(VAR, dir))) continue;
  for (const f of walk(join(VAR, dir))) {
    const rel = posix(relative(VAR, f));
    if (rel.startsWith('lib/') && same(f, join(SRC, rel))) continue; // lib compartida idéntica
    const dest = join(THEME, rel);
    mkdirSync(dirname(dest), { recursive: true });
    cpSync(f, dest);
    copied.set(f, dest);
  }
}
for (const f of walk(join(VAR, 'pages'))) {
  const dest = join(PAGES, relative(join(VAR, 'pages'), f));
  mkdirSync(dirname(dest), { recursive: true });
  cpSync(f, dest);
  copied.set(f, dest);
}
// Datos que solo tiene el diseño
for (const f of walk(join(VAR, 'data'))) {
  const rel = posix(relative(VAR, f));
  if (rel === 'data/interactions.ts') continue;
  if (!existsSync(join(SRC, rel))) {
    const dest = join(THEME, rel);
    mkdirSync(dirname(dest), { recursive: true });
    cpSync(f, dest);
    copied.set(f, dest);
    avisos.push(`${rel} no existe en los datos compartidos: copiado a src/themes/${id}/${rel}`);
  } else if (!same(f, join(SRC, rel))) {
    avisos.push(`${rel} es distinto en el diseño: se usan los datos compartidos (revisa si hay que unificarlos)`);
  }
}

// ---------- 2. Ficheros generados ----------
writeFileSync(
  join(THEME, 'base.ts'),
  `// Generado por scripts/importar-diseno.mjs. Prefijo de URL del diseño ${id}.
export const BASE = '${prefijo}';

/** Añade el prefijo del diseño a una ruta interna ('/sustancias/lsd' -> '${prefijo}/sustancias/lsd'). Idempotente. */
export const u = <T,>(p: T): T => {
  if (typeof p !== 'string' || !p.startsWith('/') || p.startsWith('//')) return p;
  if (p === BASE || /^${prefijo.replace('/', '\\/')}[/?#]/.test(p)) return p;
  return (p === '/' ? BASE : BASE + p) as T;
};
`,
);

const varInter = readFileSync(join(VAR, 'data', 'interactions.ts'), 'utf8');
const colors = Object.fromEntries([...varInter.matchAll(/^\s*([A-Z]):\s*\{[^}]*color:\s*'([^']+)'/gm)].map((m) => [m[1], m[2]]));
mkdirSync(join(THEME, 'data'), { recursive: true });
writeFileSync(
  join(THEME, 'data', 'interactions.ts'),
  `// Generado por scripts/importar-diseno.mjs: la matriz es la compartida; solo cambian los colores de riesgo.
import { riskInfo as base, type Risk } from '../../../data/interactions';
export * from '../../../data/interactions';

const colors: Record<Risk, string> = ${JSON.stringify(colors)};
export const riskInfo = Object.fromEntries(
  Object.entries(base).map(([k, v]) => [k, { ...v, color: colors[k as Risk] ?? v.color }]),
) as typeof base;
`,
);

// ---------- 3. Reescribir imports y enlaces ----------
/** Dónde está ahora lo que el diseño importaba por ruta relativa a su src/ */
// Un módulo existe si hay fichero (con o sin .ts) o carpeta con index.ts
const isModule = (p) =>
  (existsSync(p) && statSync(p).isFile()) || existsSync(p + '.ts') || existsSync(join(p, 'index.ts'));

function target(relFromVarSrc) {
  if (relFromVarSrc.startsWith('data/interactions')) return join(THEME, 'data', 'interactions.ts');
  if (relFromVarSrc === 'data' || relFromVarSrc.startsWith('data/')) {
    const own = join(THEME, relFromVarSrc);
    return isModule(own) ? own : join(SRC, relFromVarSrc);
  }
  if (relFromVarSrc.startsWith('lib/')) {
    const own = join(THEME, relFromVarSrc);
    return isModule(own) ? own : join(SRC, relFromVarSrc);
  }
  return join(THEME, relFromVarSrc);
}

function rewriteImports(text, origFile, newFile) {
  return text.replace(/((?:from|import)\s+)(['"])(\.{1,2}\/[^'"]+)\2/g, (m, kw, q, spec) => {
    const abs = resolve(dirname(origFile), spec);
    const rel = posix(relative(VAR, abs));
    if (rel.startsWith('..')) return m;
    let to = posix(relative(dirname(newFile), target(rel)));
    if (!to.startsWith('.')) to = './' + to;
    if (spec.endsWith('.ts') === false) to = to.replace(/\.ts$/, '');
    return `${kw}${q}${to}${q}`;
  });
}

/** href={EXPR} -> href={u(EXPR)} respetando llaves anidadas; href="/x" -> href={u('/x')} */
function prefixLinks(text) {
  let out = '';
  let i = 0;
  while (true) {
    const j = text.indexOf('href={', i);
    if (j === -1) break;
    let k = j + 6;
    let depth = 1;
    while (k < text.length && depth > 0) {
      if (text[k] === '{') depth++;
      else if (text[k] === '}') depth--;
      k++;
    }
    const expr = text.slice(j + 6, k - 1);
    out += text.slice(i, j) + (/^\s*u\(/.test(expr) ? `href={${expr}}` : `href={u(${expr})}`);
    i = k;
  }
  out += text.slice(i);
  return out
    .replace(/href="(\/(?!\/)(?!favicon)[^"]*)"/g, (m, p) => `href={u('${p}')}`)
    .replace(/(\bh:\s*)(`\/[^`]*`)/g, '$1u($2)')
    .replace(/new URL\((`\/[^`]*`|'\/[^']*')/g, 'new URL(u($1)')
    .replace(/\.startsWith\(((?:\w+\.)*href)\)/g, '.startsWith(u($1))');
}

function addImport(text, newFile, line) {
  if (text.startsWith('---')) return text.replace(/^---\r?\n/, `---\n${line}\n`);
  return `---\n${line}\n---\n${text}`;
}

for (const [orig, dest] of copied) {
  if (!/\.(astro|ts)$/.test(dest)) continue;
  let text = rewriteImports(readFileSync(dest, 'utf8'), orig, dest);
  if (dest.endsWith('.astro')) {
    // Los enlaces solo se tocan fuera de los <script> de cliente
    const parts = text.split(/(<script[\s\S]*?<\/script>)/);
    const linked = parts.map((p) => (p.startsWith('<script') ? p : prefixLinks(p))).join('');
    if (linked !== text) {
      let rel = posix(relative(dirname(dest), join(THEME, 'base')));
      if (!rel.startsWith('.')) rel = './' + rel;
      text = addImport(linked, dest, `import { u } from '${rel}';`);
    }
  }
  writeFileSync(dest, text);
}

// ---------- 4. Layout: selector de diseño y URL canónica ----------
const layoutFile = join(THEME, 'layouts', 'Layout.astro');
if (existsSync(layoutFile)) {
  let t = readFileSync(layoutFile, 'utf8');
  let rel = posix(relative(dirname(layoutFile), join(SRC, 'components', 'ThemeSwitch.astro')));
  let relD = posix(relative(dirname(layoutFile), join(SRC, 'data', 'disenos')));
  t = addImport(t, layoutFile, `import ThemeSwitch from '${rel}';\nimport { rutaSinDiseno } from '${relD}';`);
  t = t.replace('</head>', `  <link rel="canonical" href={new URL(rutaSinDiseno(Astro.url.pathname), Astro.site).href} />\n  </head>`);
  t = t.replace('</body>', `  <ThemeSwitch actual="${id}" />\n  </body>`);
  writeFileSync(layoutFile, t);
} else {
  avisos.push('No hay layouts/Layout.astro: añade a mano <ThemeSwitch> y la URL canónica');
}

const n = [...copied.values()].filter((f) => f.startsWith(PAGES)).length;
console.log(`✓ ${id}: ${n} páginas en src/pages${prefijo}/, tema en src/themes/${id}/`);
for (const a of avisos) console.log(`  ! ${a}`);
