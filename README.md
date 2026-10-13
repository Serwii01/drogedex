# DROGEDEX

Enciclopedia visual de sustancias psicoactivas con enfoque de reducción de riesgos. Proyecto de TFG de Psicología.

**Stack:** [Astro 5](https://astro.build) (sitio estático, sin base de datos) · CSS propio · gráficos SVG generados en build. Cero dependencias en cliente salvo pequeños scripts de filtrado e interacción.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera /dist
```

## Estructura

```
src/
  data/
    families.ts        9 familias (mecanismo, diana, riesgos, posición en el triángulo)
    substances-a.ts    opioides y estimulantes
    substances-b.ts    resto de familias
    interactions.ts    matriz de combinaciones 21×21 + notas clínicas
    stats.ts           datos de Nutt 2010, UNODC, EDADES, CDC, Gable
  components/          Sigil (póster generativo), Structure (PubChem), gráficos SVG
  pages/               inicio, índice, fichas, familias, combinaciones, datos, metodología
```

### Añadir o editar una sustancia
Edita `src/data/substances-a.ts` o `substances-b.ts`. Cada entrada sigue el tipo `Substance` de `src/data/types.ts`. La numeración (#001…) se asigna automáticamente según el orden.

### Fotografías propias
Las imágenes actuales son estructuras químicas de PubChem (dominio público, 1000×1000 px) y pósters generativos vectoriales. Si quieres añadir fotografías (p. ej. de Wikimedia Commons con licencia libre), colócalas en `public/img/` y cita autor y licencia.

## Despliegue en Vercel

1. Sube la carpeta a un repositorio de GitHub.
2. En [vercel.com/new](https://vercel.com/new) importa el repositorio. Vercel detecta Astro automáticamente (build `npm run build`, salida `dist`).
3. Opcional: cambia `site` en `astro.config.mjs` por tu dominio final.

O desde la terminal:

```bash
npx vercel
```

## Aviso
Contenido educativo. No promueve el consumo ni incluye dosis. Ante una emergencia: 112.
