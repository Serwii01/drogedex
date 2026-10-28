# DROGEDEX

Enciclopedia visual de sustancias psicoactivas con enfoque de reducción de riesgos. Proyecto de TFG de Psicología.

**Stack:** [Astro 5](https://astro.build) (sitio estático, sin base de datos) · CSS propio · gráficos SVG y mapa mundial generados en build. Cero dependencias en cliente salvo pequeños scripts de filtrado e interacción.

## Tres diseños, una web

La misma enciclopedia con tres estéticas. Se cambia con el selector **Diseño** (abajo a la izquierda), que lleva a la misma página en el otro diseño:

| Diseño | URL | Estética |
|---|---|---|
| **Original** | `/` | Neón ácido sobre negro |
| **Nave** | `/nave/…` | Nave rave y *ruin bar*: fotocopia, cinta, naranja de seguridad |
| **Hormigón** | `/hormigon/…` | Club de hormigón, monocromo y brutalista |

Los datos (`src/data`) son comunes: una corrección en una ficha se ve en los tres.

Nave y Hormigón siguen teniendo **su propio repo** ([drogedex-nave](https://github.com/Serwii01/drogedex-nave), [drogedex-beton](https://github.com/Serwii01/drogedex-beton)) y su propia web en Vercel. Aquí se importan con un script que copia sus layouts, componentes, estilos y páginas, apunta sus imports a los datos compartidos y añade el prefijo de URL a los enlaces:

```bash
npm run disenos    # reimporta los dos (los repos deben estar al lado: ../drogedex-nave y ../drogedex-beton)
node scripts/importar-diseno.mjs ../drogedex-nave nave /nave    # uno solo
```

No edites `src/themes/` ni `src/pages/nave|hormigon/` a mano: se regeneran. Los cambios de diseño se hacen en su repo y se reimportan. La versión original anterior a la fusión está en la rama `original`.

## Secciones

Índice y fichas · Familias · Mezclas (comprobador) · Matriz de combinaciones · Comparar · Psicología (DSM-5, Prochaska, Koob, biopsicosocial) · Mapa (precios y rutas) · Cronología · Datos · Glosario · Emergencias · Método · Galería. Buscador con la tecla `/`.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera /dist (~177 páginas: las de los tres diseños)
```

## Estructura

```
src/
  data/                datos comunes a los tres diseños
    families.ts        9 familias (mecanismo, diana, riesgos, posición en el triángulo)
    substances-a.ts    opioides y estimulantes
    substances-b.ts    resto de familias
    interactions.ts    matriz de combinaciones 21×21 + notas clínicas
    stats.ts           datos de Nutt 2010, UNODC, EDADES, CDC, Gable
    extra.ts           glosario, cronología, mitos, emergencias, rutas y geografía
    psych.ts           DSM-5, etapas del cambio, ciclo de Koob, modelo biopsicosocial, intervenciones
    rooms.ts           las 13 secciones (menú y buscador)
    disenos.ts         los tres diseños y sus prefijos de URL
  components/          diseño Original + ThemeSwitch (selector de diseño, común)
  layouts/             layout del diseño Original
  pages/               páginas del diseño Original (raíz)
  pages/nave/          páginas de Nave (generadas)
  pages/hormigon/      páginas de Hormigón (generadas)
  themes/nave/         layout, componentes, estilos y colores de Nave (generados)
  themes/hormigon/     ídem de Hormigón (generados)
scripts/
  importar-diseno.mjs  importa un diseño desde su repo
  photo-candidates.mjs busca fotos candidatas en Wikimedia Commons
```

### Añadir o editar una sustancia
Edita `src/data/substances-a.ts` o `substances-b.ts`. Cada entrada sigue el tipo `Substance` de `src/data/types.ts`. La numeración (#001…) se asigna automáticamente según el orden.

### Fotografías
Estructuras químicas de PubChem (dominio público) y fotografías de Wikimedia Commons con licencia libre, enlazadas desde `src/data/photos.ts` con su autor y licencia. `scripts/photo-candidates.mjs` busca candidatas (solo metadatos); la elección final es manual.

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
