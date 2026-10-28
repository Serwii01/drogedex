# Estado del proyecto

> Lo mantiene Claude con `/cerrar`. Es la memoria de trabajo: dónde se quedó y qué viene después.

## Estado actual
Primera versión completa y publicada en drogedex.vercel.app: 35 sustancias en 9 familias con fichas (estructura de PubChem, foto de Wikimedia, póster generativo, daños, efectos, legalidad y precios), matriz de combinaciones 21×21, gráficos con datos de Nutt/UNODC/EDADES/CDC/Gable y página de metodología. Compila sin errores (51 páginas, comprobado el 2026-10-28). Solo tiene un commit, el inicial.

## Siguientes pasos
- [ ] Elegir el diseño definitivo entre las tres variantes, todas del 13 oct y publicadas: esta (original, drogedex.vercel.app), `drogedex-nave` (nave rave / ruin bar, acento naranja; drogedex-nave.vercel.app) y `drogedex-beton` (club de hormigón, monocroma y brutalista; drogedex-beton.vercel.app). Comparten los datos y cambian estilos y componentes. Seguir solo en una y archivar las otras (prioridad `archivado` en el hub).
- [ ] Comprobar que lo publicado en Vercel corresponde a este repo y a su último commit.
- [ ] Revisar el contenido con criterio del TFG: fuentes de cada dato, sustancias con daños `est` (estimación editorial) y textos de reducción de riesgos.
- [ ] Recuperar o volver a escribir `scripts/photo-candidates.mjs` (lo cita `photos.ts`, pero no está en el repo) si hay que añadir fotos.

## Última sesión
### 2026-10-28
- Creadas las fichas `CLAUDE.md` y `STATUS.md` analizando el repo. Comprobado que compila (`npm run build`, 51 páginas) y que drogedex.vercel.app responde.

### 2026-10-13 (reconstruido desde git)
- Versión inicial completa: «Drogedex: enciclopedia de sustancias psicoactivas (TFG Psicología)».

## Decisiones
- Sitio estático con Astro y datos en TypeScript: sin base de datos, desplegable gratis en Vercel.
- Enfoque de reducción de riesgos y sin dosis.
- Daños con la escala de Nutt et al. (2007), marcando si cada valor es publicado o estimado.
- Imágenes enlazadas desde PubChem y Wikimedia Commons (no se guardan en el repo), con su atribución.

## Problemas conocidos
- `photos.ts` dice haberse generado con `scripts/photo-candidates.mjs`, que no está en el repo.
- Las imágenes dependen de PubChem y de Wikimedia Commons: si cambian o caen, las fichas se quedan sin estructura o sin foto.
