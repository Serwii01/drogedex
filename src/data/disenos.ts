/**
 * Los tres diseños de Drogedex. Comparten datos y rutas; cambia el prefijo de la URL.
 * Original vive en la raíz, Nave y Hormigón se importan con scripts/importar-diseno.mjs.
 */
export const disenos = [
  { id: 'original', nombre: 'Original', base: '', desc: 'Neón ácido sobre negro' },
  { id: 'nave', nombre: 'Nave', base: '/nave', desc: 'Nave rave y fotocopia' },
  { id: 'hormigon', nombre: 'Hormigón', base: '/hormigon', desc: 'Club de hormigón, monocromo' },
] as const;

export type DisenoId = (typeof disenos)[number]['id'];

/** Quita el prefijo del diseño a una ruta: '/nave/sustancias/lsd' -> '/sustancias/lsd'. */
export function rutaSinDiseno(path: string): string {
  const p = path.length > 1 ? path.replace(/\/+$/, '') : path;
  for (const d of disenos) {
    if (d.base && (p === d.base || p.startsWith(d.base + '/'))) return p.slice(d.base.length) || '/';
  }
  return p || '/';
}

/** La misma página en otro diseño. */
export function rutaEnDiseno(path: string, base: string): string {
  const r = rutaSinDiseno(path);
  return base ? (r === '/' ? base : base + r) : r;
}
