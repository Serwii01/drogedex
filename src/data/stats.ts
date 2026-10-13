/** Nutt, King & Phillips (2010). Drug harms in the UK: a multicriteria decision analysis. The Lancet, 376, 1558–1565. Puntuación global de daño (0–100). */
export const nutt2010 = [
  { name: 'Alcohol', v: 72 },
  { name: 'Heroína', v: 55 },
  { name: 'Crack', v: 54 },
  { name: 'Metanfetamina', v: 33 },
  { name: 'Cocaína', v: 27 },
  { name: 'Tabaco', v: 26 },
  { name: 'Anfetamina', v: 23 },
  { name: 'Cannabis', v: 20 },
  { name: 'GHB', v: 19 },
  { name: 'Benzodiacepinas', v: 15 },
  { name: 'Ketamina', v: 15 },
  { name: 'Metadona', v: 14 },
  { name: 'Mefedrona', v: 13 },
  { name: 'Butano', v: 10 },
  { name: 'Khat', v: 9 },
  { name: 'Esteroides', v: 9 },
  { name: 'Éxtasis', v: 9 },
  { name: 'LSD', v: 7 },
  { name: 'Buprenorfina', v: 7 },
  { name: 'Setas', v: 6 },
];

/** UNODC, World Drug Report 2024. Personas que consumieron en el último año (2022), en millones. */
export const unodcUsers = [
  { name: 'Cannabis', v: 228 },
  { name: 'Opioides', v: 60 },
  { name: 'Anfetaminas', v: 30 },
  { name: 'Cocaína', v: 23 },
  { name: 'Éxtasis', v: 20 },
];

/** Ministerio de Sanidad (DGPNSD), encuesta EDADES 2022. Prevalencia en los últimos 12 meses, población 15–64 años (%). */
export const edades2022 = [
  { name: 'Alcohol', v: 76.4 },
  { name: 'Tabaco', v: 39.0 },
  { name: 'Hipnosedantes', v: 13.1 },
  { name: 'Cannabis', v: 10.6 },
  { name: 'Cocaína', v: 2.4 },
  { name: 'Éxtasis', v: 0.7 },
  { name: 'Anfetaminas', v: 0.6 },
  { name: 'Alucinógenos', v: 0.5 },
];

/** CDC / NCHS (2023). Muertes por sobredosis en EE. UU. en 2022 por sustancia implicada (una muerte puede implicar varias). */
export const cdc2022 = [
  { name: 'Opioides sintéticos (fentanilo)', v: 73838 },
  { name: 'Psicoestimulantes (metanfetamina)', v: 34022 },
  { name: 'Cocaína', v: 27569 },
  { name: 'Opioides de prescripción', v: 14716 },
  { name: 'Heroína', v: 5871 },
];

/**
 * Posición aproximada en el gráfico de Gable (2004, 2006): margen de seguridad
 * (dosis letal / dosis activa habitual) frente a potencial de dependencia (0–5).
 * Valores redondeados con fines divulgativos.
 */
export const gable = [
  { name: 'Heroína', safety: 6, dep: 4.8, slug: 'heroina' },
  { name: 'Alcohol', safety: 10, dep: 3.6, slug: 'alcohol' },
  { name: 'GHB', safety: 8, dep: 2.6, slug: 'ghb' },
  { name: 'Cocaína', safety: 15, dep: 4.0, slug: 'cocaina' },
  { name: 'Metanfetamina', safety: 10, dep: 4.2, slug: 'metanfetamina' },
  { name: 'Nicotina', safety: 50, dep: 4.6, slug: 'nicotina' },
  { name: 'MDMA', safety: 16, dep: 1.8, slug: 'mdma' },
  { name: 'Codeína', safety: 20, dep: 2.8, slug: 'codeina' },
  { name: 'Ketamina', safety: 38, dep: 2.2, slug: 'ketamina' },
  { name: 'Mescalina', safety: 24, dep: 0.5, slug: 'mescalina' },
  { name: 'DMT', safety: 50, dep: 0.6, slug: 'dmt' },
  { name: 'Óxido nitroso', safety: 150, dep: 1.4, slug: 'oxido-nitroso' },
  { name: 'Cannabis', safety: 1000, dep: 1.8, slug: 'cannabis' },
  { name: 'LSD', safety: 1000, dep: 0.4, slug: 'lsd' },
  { name: 'Psilocibina', safety: 1000, dep: 0.3, slug: 'psilocibina' },
  { name: 'Cafeína', safety: 100, dep: 1.5, slug: 'cafeina' },
];
