# Estado del proyecto

> Lo mantiene Claude con `/cerrar`. Es la memoria de trabajo: dónde se quedó y qué viene después.

## Estado actual
Publicada en drogedex.vercel.app (`main`): la web reúne los tres diseños, **Original** en `/`, **Nave** en `/nave` y **Hormigón** en `/hormigon`, con un selector para cambiar de diseño en cualquier página. La Original ya tiene todo lo que tenían Nave y Hormigón: 13 secciones, buscador, comprobador de mezclas, comparador, psicología, mapa, cronología, glosario, emergencias y galería. Compila (177 páginas). La versión anterior a la fusión está en la rama `original`.

## Siguientes pasos
- [ ] Revisar la web publicada en escritorio (en el navegador solo se comprobó a ancho de móvil)
- [ ] Decidir qué hacer con drogedex-nave.vercel.app y drogedex-beton.vercel.app: mantenerlas o redirigirlas a /nave y /hormigon
- [ ] Revisar el contenido con criterio del TFG: fuentes de cada dato, sustancias con daños `est` (estimación editorial) y textos de reducción de riesgos
- [ ] Comprobar en el navegador la impresión / PDF de una ficha en el diseño Original

## Última sesión
### 2026-10-28
- Fusión de los tres diseños: datos comunes en `src/data` (más glosario, cronología, mitos, emergencias, rutas, psicología y salas); Nave y Hormigón importados con `scripts/importar-diseno.mjs` (`npm run disenos`) bajo `/nave` y `/hormigon`; selector de diseño (`ThemeSwitch`) en los tres layouts, que conserva la página y los parámetros; URL canónica de Nave y Hormigón apuntando a la Original.
- Original al día: 8 secciones nuevas (Mezclas, Comparar, Psicología, Mapa, Cronología, Glosario, Emergencias, Galería) con su estética; layout con menú «Más», buscador (`/`) y botón 112; portada con Herramientas y Mitos; ficha con citar APA, imprimir, comparar, enlace al comprobador, glosario y teclas ← →.
- Subidas las ramas `fusion` y `original`; vista previa de Vercel correcta; `fusion` fusionada en `main` (avance rápido) y publicada.
- Recuperado `scripts/photo-candidates.mjs` (estaba en Nave). Nuevas dependencias para el mapa: `d3-geo`, `topojson-client`, `world-atlas`.
- Antes: creadas las fichas `CLAUDE.md` y `STATUS.md`; drogedex.vercel.app responde.

### 2026-10-13 (reconstruido desde git)
- Versión inicial completa: «Drogedex: enciclopedia de sustancias psicoactivas (TFG Psicología)».

## Decisiones
- Sitio estático con Astro y datos en TypeScript: sin base de datos, desplegable gratis en Vercel.
- Enfoque de reducción de riesgos y sin dosis.
- Daños con la escala de Nutt et al. (2007), marcando si cada valor es publicado o estimado.
- Imágenes enlazadas desde PubChem y Wikimedia Commons (no se guardan en el repo), con su atribución.
- Tres diseños por prefijo de URL (no por cambio de CSS) para conservar cada diseño tal cual, con sus componentes propios. La Original va en la raíz.
- Nave y Hormigón siguen en sus repos y se importan con un script (no se copian a mano): así siguen siendo independientes y se pueden actualizar.
- Datos únicos para los tres; cada diseño solo cambia los colores del semáforo de riesgo (`src/themes/<id>/data/interactions.ts`).
- Nave y Hormigón llevan la URL canónica de la Original para que los buscadores no los traten como contenido duplicado.

## Problemas conocidos
- Si se cambia el contenido en el repo de Nave o de Hormigón (`src/data`), el importador avisa pero usa los datos de aquí: hay que llevar el cambio a mano a `src/data`.
- Las imágenes dependen de PubChem y de Wikimedia Commons: si cambian o caen, las fichas se quedan sin estructura o sin foto.
- Las páginas `/nave/404` y `/hormigon/404` existen como rutas, pero el 404 real de Vercel es el de la Original.
