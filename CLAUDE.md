# DROGEDEX

Enciclopedia visual de sustancias psicoactivas con enfoque de **reducción de riesgos**, para un TFG de Psicología. Contenido educativo: no promueve el consumo ni incluye dosis. Publicada en https://drogedex.vercel.app.

**Tres diseños en una sola web**, con selector para cambiar entre ellos en cualquier página: Original (`/`), Nave (`/nave/…`) y Hormigón (`/hormigon/…`). Ver `README.md`.

## Stack
- **Astro 5**: sitio 100 % estático, sin base de datos ni backend.
- `d3-geo` + `topojson-client` + `world-atlas`: mapa mundial de puntos calculado en el build (sección Mapa).
- CSS propio por diseño, sin framework.
- Gráficos SVG generados en el build. En el cliente solo hay pequeños scripts (filtros, buscador, comprobador de mezclas, comparador, test DSM-5).
- Imágenes externas: estructuras 2D de **PubChem** y fotos de **Wikimedia Commons** (con autor, licencia y enlace).
- Despliegue en **Vercel** desde `main` (build `npm run build`, salida `dist`).

## Estructura
- `src/data/` — **contenido común a los tres diseños**:
  - `types.ts` (tipo `Substance`), `families.ts` (9 familias), `substances-a.ts` y `substances-b.ts` (35 sustancias), `index.ts` (numeración #001… por orden, `bySlug`, países).
  - `interactions.ts` (matriz 21×21 y notas), `stats.ts` (Nutt, UNODC, EDADES, CDC, Gable), `photos.ts` (Wikimedia).
  - `extra.ts` (glosario, cronología, mitos, emergencias, rutas, geografía), `psych.ts` (DSM-5, Prochaska, Koob, biopsicosocial, intervenciones), `rooms.ts` (las 13 secciones), `disenos.ts` (diseños y prefijos).
- **Diseño Original** (el de la raíz, se edita a mano): `src/layouts/Layout.astro`, `src/components/`, `src/styles/global.css`, `src/pages/*.astro`, `src/pages/sustancias/`, `src/pages/familias/`.
- `src/components/ThemeSwitch.astro` — selector de diseño, común a los tres layouts.
- **Diseños Nave y Hormigón** (**generados, no editar a mano**): `src/themes/<id>/` (layout, componentes, estilos, colores de riesgo, `base.ts` con `u()` para el prefijo) y `src/pages/nave/`, `src/pages/hormigon/`. Salen de sus repos (`../drogedex-nave`, `../drogedex-beton`) con `scripts/importar-diseno.mjs`.

## Comandos
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # ~177 páginas (las de los tres diseños)
npm run disenos    # reimporta Nave y Hormigón desde ../drogedex-nave y ../drogedex-beton
```
En Git Bash, si se llama al script a mano, hay que poner `MSYS_NO_PATHCONV=1` delante (si no, convierte `/nave` en una ruta de Windows). Con `npm run disenos` no hace falta.

## Convenciones
- Todo en **español**.
- **Contenido** (sustancias, glosario, etc.): se cambia en `src/data/` y aparece en los tres diseños.
- **Diseño Original**: se edita en `src/`. **Nave y Hormigón**: se editan en su repo y se reimportan; nunca en `src/themes/` ni en `src/pages/nave|hormigon/`.
- Las secciones nuevas tienen que existir en los tres diseños con la misma ruta, para que el selector lleve a la página equivalente.
- Daños en la escala 0–3 de Nutt et al. (2007). `harm.src` = `'nutt2007'` si es el valor publicado y `'est'` si es una estimación editorial. Mantén esa distinción.
- **Nunca incluir dosis** ni contenido que promueva el consumo. Cada dato con una fuente citable.
- Imágenes: solo de dominio público o con licencia libre, con autor y licencia.
- Ramas: `main` es la web fusionada (la publica Vercel), `original` guarda la versión anterior a la fusión, y `fusion` es donde se hizo la fusión.

> El estado del trabajo (qué se hizo y qué falta) está en `STATUS.md`.
