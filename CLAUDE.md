# DROGEDEX

Enciclopedia visual de sustancias psicoactivas con enfoque de **reducción de riesgos**, para un TFG de Psicología. Contenido educativo: no promueve el consumo ni incluye dosis. Publicada en https://drogedex.vercel.app.

## Stack
- **Astro 5**: sitio 100 % estático, sin base de datos ni backend. Es la única dependencia.
- CSS propio (`src/styles/global.css`), sin framework.
- Gráficos SVG generados en el build (radar de daños, dispersión, barras, matriz, línea temporal, rueda). En el cliente solo hay pequeños scripts de filtrado e interacción.
- Imágenes externas: estructuras 2D de **PubChem** (dominio público) y fotos de **Wikimedia Commons** (licencias libres, con autor, licencia y enlace en cada ficha).
- Despliegue en **Vercel**: build `npm run build`, salida `dist`. El dominio está en `site` de `astro.config.mjs`.

## Estructura
- `src/data/` — todo el contenido, tipado:
  - `types.ts` — tipo `Substance` (mecanismo, vías, historia, consumo, duración, efectos, legalidad, precios por país, daños, reducción de riesgos, clave de combinaciones).
  - `families.ts` — las 9 familias (opioides, estimulantes, empatógenos, psicodélicos, disociativos, depresores, cannabinoides, deliriantes, inhalantes) con mecanismo, diana, riesgos y posición en el triángulo.
  - `substances-a.ts` (opioides y estimulantes) y `substances-b.ts` (el resto): 35 sustancias.
  - `index.ts` — une las listas y numera (#001…) **según el orden**, y define `bySlug` y la tabla de países.
  - `interactions.ts` — matriz de combinaciones 21×21 (`ComboKey`) con notas clínicas.
  - `stats.ts` — datos de Nutt 2010, UNODC, EDADES, CDC y Gable.
  - `photos.ts` — fotos de Wikimedia Commons por sustancia.
- `src/components/` — `Sigil` (póster generativo), `Structure` (PubChem), `Photo`, `Card` y los gráficos SVG (`HarmRadar`, `Scatter`, `BarChart`, `Matrix`, `Timeline`, `Wheel`, `Synapse`).
- `src/pages/` — inicio, `sustancias/` (índice y `[slug]`), `familias/` (índice y `[id]`), `combinaciones`, `graficos`, `metodologia` y `404`.
- `src/lib/rand.ts` — aleatorio con semilla para los pósters generativos.

## Comandos
```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/ (51 páginas)
npm run preview
```

## Convenciones
- Todo en **español**.
- Para añadir o editar una sustancia, edita `substances-a.ts` o `substances-b.ts` siguiendo `Substance`. No numeres a mano: el orden del array decide el número.
- Daños en la escala 0–3 de Nutt et al. (2007). `harm.src` = `'nutt2007'` si es el valor publicado y `'est'` si es una estimación editorial con la misma escala. Mantén esa distinción.
- **Nunca incluir dosis** ni contenido que promueva el consumo. Cada dato debe tener una fuente citable (la metodología lo explica).
- Imágenes: solo de dominio público o con licencia libre, citando autor y licencia.

> El estado del trabajo (qué se hizo y qué falta) está en `STATUS.md`.
