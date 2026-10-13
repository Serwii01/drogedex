import type { ComboKey } from './types';

export type Risk = 'S' | 'N' | 'D' | 'C' | 'U' | 'X';

export const riskInfo: Record<Risk, { label: string; short: string; color: string; text: string }> = {
  S: { label: 'Bajo riesgo · sinergia', short: '+', color: '#2bff88', text: 'Efectos que se potencian; poco riesgo añadido si se usan con prudencia.' },
  N: { label: 'Bajo riesgo · sin sinergia', short: '=', color: '#7fa6ff', text: 'Efectos simplemente aditivos, sin interacción relevante conocida.' },
  D: { label: 'Bajo riesgo · disminución', short: '−', color: '#3b5bdb', text: 'Una sustancia atenúa los efectos de la otra.' },
  C: { label: 'Precaución', short: '!', color: '#ffd23f', text: 'Riesgo moderado. Combinar solo con información, dosis bajas y precauciones.' },
  U: { label: 'Inseguro', short: '!!', color: '#ff8a00', text: 'Riesgo considerable para la salud. Evitar.' },
  X: { label: 'Peligroso', short: '✕', color: '#ff2a1f', text: 'Riesgo grave o potencialmente mortal. No combinar.' },
};

export const comboKeys: { key: ComboKey; label: string }[] = [
  { key: 'lsd', label: 'LSD' },
  { key: 'psilo', label: 'Psilocibina' },
  { key: 'dmt', label: 'DMT' },
  { key: 'mesc', label: 'Mescalina' },
  { key: '2cb', label: '2C-B' },
  { key: 'cann', label: 'Cannabis' },
  { key: 'keta', label: 'Ketamina' },
  { key: 'dxm', label: 'DXM' },
  { key: 'n2o', label: 'Óxido nitroso' },
  { key: 'amph', label: 'Anfetaminas' },
  { key: 'mdma', label: 'MDMA' },
  { key: 'coca', label: 'Cocaína' },
  { key: 'caf', label: 'Cafeína' },
  { key: 'alc', label: 'Alcohol' },
  { key: 'ghb', label: 'GHB/GBL' },
  { key: 'opi', label: 'Opioides' },
  { key: 'tram', label: 'Tramadol' },
  { key: 'benzo', label: 'Benzodiacepinas' },
  { key: 'imao', label: 'IMAO' },
  { key: 'isrs', label: 'ISRS' },
  { key: 'litio', label: 'Litio' },
];

/**
 * Triángulo superior de la matriz: fila i contiene los riesgos frente a las claves j > i.
 * Adaptado de la TripSit Drug Combinations Chart (v3) y literatura de reducción de daños.
 */
const upper: string[] = [
  'SSSSCSSSCSCNDDNUDSDX', // lsd
  'SSSCSSSCSCNDDNUDSDX', // psilo
  'SSCSSSCSCNDDNUDSDX', // dmt
  'SCSSSCSCNDDNUDCDX', // mesc
  'CSCSCSCNDDNUDCDX', // 2cb
  'SCSCSCNSSSSDSSC', // cann
  'CSCSCNXXXXCCNN', // keta
  'SUXXCXXXXCXXC', // dxm
  'CSCNCCCCDNNN', // n2o
  'UCCCCCXDXCC', // amph
  'UCCCCXDXDU', // mdma
  'CUCXXDXCC', // coca
  'NNNNDCNC', // caf
  'XXXXXCC', // alc
  'XXXCCC', // ghb
  'XXXCN', // opi
  'XXXC', // tram
  'CNN', // benzo
  'XC', // imao
  'C', // isrs
];

const index = Object.fromEntries(comboKeys.map((k, i) => [k.key, i])) as Record<ComboKey, number>;

export function risk(a: ComboKey, b: ComboKey): Risk | null {
  if (a === b) return null;
  let i = index[a];
  let j = index[b];
  if (i > j) [i, j] = [j, i];
  return upper[i][j - i - 1] as Risk;
}

/** Explicaciones de las combinaciones más relevantes clínicamente. */
export const notes: Record<string, string> = {
  'alc+ghb': 'Ambos deprimen el SNC y la respiración; la combinación provoca pérdida de conciencia, vómitos y aspiración. Es una de las causas más frecuentes de urgencias en ocio nocturno.',
  'alc+opi': 'Depresión respiratoria sinérgica. Implicada en una gran proporción de muertes por sobredosis de opioides.',
  'benzo+opi': 'Combinación responsable de buena parte de las muertes por sobredosis: ambas deprimen la respiración. Las agencias sanitarias exigen advertencias en el prospecto.',
  'alc+benzo': 'Potenciación de la sedación y la depresión respiratoria; amnesia y caídas.',
  'alc+coca': 'En el hígado se forma cocaetileno, más cardiotóxico y de vida media más larga que la cocaína. El alcohol además invita a consumir más.',
  'imao+mdma': 'Riesgo muy alto de síndrome serotoninérgico e hipertensión grave. Incluye la ayahuasca y moclobemida.',
  'isrs+tram': 'El tramadol también inhibe la recaptación de serotonina: síndrome serotoninérgico y convulsiones.',
  'litio+lsd': 'Numerosos informes de convulsiones y reacciones graves al combinar litio con psicodélicos serotoninérgicos.',
  'litio+psilo': 'Numerosos informes de convulsiones y reacciones graves al combinar litio con psicodélicos.',
  'dxm+isrs': 'El DXM inhibe la recaptación de serotonina: síndrome serotoninérgico.',
  'dxm+mdma': 'Ambos serotoninérgicos y el DXM inhibe el metabolismo de la MDMA (CYP2D6): hipertermia y síndrome serotoninérgico.',
  'imao+isrs': 'Combinación clásica de síndrome serotoninérgico potencialmente mortal.',
  'alc+keta': 'Ambos deprimen la conciencia; vómitos con reflejos anulados y riesgo de aspiración.',
  'ghb+keta': 'Pérdida de conciencia profunda y depresión respiratoria; frecuente en chemsex.',
  'amph+mdma': 'Mayor neurotoxicidad, hipertermia y carga cardiovascular.',
  'coca+mdma': 'Aumenta la carga cardiovascular y el riesgo de hipertermia; la cocaína puede enmascarar los efectos empatógenos.',
  'coca+opi': '«Speedball»: el estimulante enmascara la depresión respiratoria, que aparece cuando se pasa su efecto.',
  'cann+lsd': 'El cannabis intensifica de forma impredecible los psicodélicos y puede precipitar ansiedad intensa.',
  'imao+opi': 'Algunos opioides (tramadol, petidina, metadona, fentanilo) pueden causar síndrome serotoninérgico con IMAO.',
};

export function note(a: ComboKey, b: ComboKey): string | undefined {
  return notes[[a, b].sort().join('+')];
}
