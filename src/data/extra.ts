/* Glosario, cronología, mitos, emergencias y geografía. */

export const glossary: { t: string; d: string; see?: string[] }[] = [
  { t: 'Adulterante', d: 'Sustancia añadida a una droga para aumentar su peso o imitar sus efectos (levamisol en la cocaína, fentanilo en la heroína, cafeína en el speed).', see: ['cocaina', 'fentanilo'] },
  { t: 'Bajón', d: 'Estado de malestar físico y anímico tras el efecto de una sustancia, especialmente estimulantes y empatógenos.', see: ['mdma', 'cocaina'] },
  { t: 'Chemsex', d: 'Uso de drogas (mefedrona, metanfetamina, GHB) para mantener relaciones sexuales durante horas o días, sobre todo entre hombres que tienen sexo con hombres. Asociado a riesgos de ITS, sobredosis de GHB y dependencia.', see: ['ghb', 'mefedrona', 'metanfetamina'] },
  { t: 'Cocaetileno', d: 'Metabolito que se forma en el hígado al combinar cocaína y alcohol. Más cardiotóxico y duradero que la cocaína.', see: ['cocaina', 'alcohol'] },
  { t: 'Craving', d: 'Deseo intenso de consumir. Es un criterio diagnóstico del DSM-5 y un predictor clave de recaída.' },
  { t: 'Dependencia física', d: 'Adaptación del organismo a una sustancia que provoca síndrome de abstinencia al retirarla. No equivale a adicción.' },
  { t: 'Desliz / recaída', d: 'En el modelo de Marlatt, el desliz es un consumo puntual; la recaída, la vuelta al patrón anterior. Diferenciarlos evita el «efecto de violación de la abstinencia».' },
  { t: 'G-hole', d: 'Pérdida de conciencia por sobredosis de GHB/GBL. Puede evolucionar a coma y depresión respiratoria.', see: ['ghb'] },
  { t: 'HPPD', d: 'Trastorno perceptivo persistente por alucinógenos: alteraciones visuales que se mantienen tras el efecto. Poco frecuente.', see: ['lsd'] },
  { t: 'Hiponatremia', d: 'Concentración baja de sodio en sangre. Con MDMA se debe a beber demasiada agua y a la liberación de vasopresina. Puede causar edema cerebral.', see: ['mdma'] },
  { t: 'K-hole', d: 'Estado de disociación profunda con ketamina a dosis altas: desconexión del cuerpo y del entorno.', see: ['ketamina'] },
  { t: 'Naloxona', d: 'Antagonista opioide que revierte una sobredosis de opioides en minutos. Existe en spray nasal e inyectable.', see: ['heroina', 'fentanilo'] },
  { t: 'Nitazenos', d: 'Opioides sintéticos de potencia similar o superior al fentanilo detectados en Europa desde 2019.', see: ['fentanilo'] },
  { t: 'Policonsumo', d: 'Consumo de varias sustancias en el mismo periodo. Es el patrón mayoritario y multiplica los riesgos.' },
  { t: 'Reducción de riesgos y daños', d: 'Enfoque de salud pública que busca minimizar las consecuencias negativas del consumo sin exigir abstinencia.' },
  { t: 'Set & setting', d: 'Expresión de Timothy Leary: el estado mental (set) y el entorno (setting) determinan en gran parte la experiencia con psicodélicos.', see: ['lsd', 'psilocibina'] },
  { t: 'Síndrome serotoninérgico', d: 'Exceso de serotonina: hipertermia, agitación, rigidez, clonus y taquicardia. Puede ser mortal. Típico al combinar MDMA, IMAO, ISRS, tramadol o DXM.', see: ['mdma', 'tramadol', 'dxm'] },
  { t: 'Sumisión química', d: 'Administrar una sustancia a una persona sin su conocimiento para anular su voluntad. Delito. Sustancias más implicadas: alcohol, benzodiacepinas, GHB, escopolamina.', see: ['escopolamina', 'ghb'] },
  { t: 'Tolerancia', d: 'Disminución del efecto con la misma cantidad, que obliga a consumir más. Desaparece con la abstinencia: riesgo de sobredosis al volver a consumir.' },
  { t: 'Tolerancia cruzada', d: 'La tolerancia a una sustancia se extiende a otras del mismo mecanismo (p. ej., LSD y psilocibina; alcohol y benzodiacepinas).' },
  { t: 'Tripsitter', d: 'Persona sobria que acompaña a quien consume un psicodélico para garantizar su seguridad.' },
];

export const milestones: { y: number; label: string; t: string; kind: 'ley' | 'cultura' | 'ciencia' }[] = [
  { y: 1839, label: '1839', t: 'Primera Guerra del Opio entre Reino Unido y China.', kind: 'ley' },
  { y: 1912, label: '1912', t: 'Convención Internacional del Opio de La Haya: primer tratado de control de drogas.', kind: 'ley' },
  { y: 1920, label: '1920', t: 'Ley seca en EE. UU. (hasta 1933).', kind: 'ley' },
  { y: 1954, label: '1954', t: 'Aldous Huxley publica «Las puertas de la percepción».', kind: 'cultura' },
  { y: 1961, label: '1961', t: 'Convención Única de Estupefacientes de la ONU.', kind: 'ley' },
  { y: 1965, label: '1965', t: 'Dole y Nyswander demuestran la eficacia del mantenimiento con metadona.', kind: 'ciencia' },
  { y: 1971, label: '1971', t: 'Convenio sobre Sustancias Sicotrópicas. Nixon declara la «guerra contra las drogas».', kind: 'ley' },
  { y: 1976, label: '1976', t: 'Países Bajos: política de tolerancia y coffeeshops.', kind: 'ley' },
  { y: 1982, label: '1982', t: 'Prochaska y DiClemente proponen el modelo transteórico del cambio.', kind: 'ciencia' },
  { y: 1985, label: '1985', t: 'España crea el Plan Nacional sobre Drogas.', kind: 'ley' },
  { y: 1988, label: '1988', t: '«Second Summer of Love»: acid house y MDMA en Reino Unido.', kind: 'cultura' },
  { y: 1991, label: '1991', t: 'Abre Tresor en Berlín, en la cámara acorazada de unos grandes almacenes junto al antiguo Muro.', kind: 'cultura' },
  { y: 1991.5, label: '1991', t: 'Miller y Rollnick publican «Motivational Interviewing».', kind: 'ciencia' },
  { y: 1997, label: '1997', t: 'Nace Energy Control en Barcelona: análisis de sustancias y reducción de riesgos.', kind: 'cultura' },
  { y: 2001, label: '2001', t: 'Portugal despenaliza la posesión de todas las drogas para consumo propio.', kind: 'ley' },
  { y: 2004, label: '2004', t: 'Abre Berghain en una antigua central eléctrica de Berlín.', kind: 'cultura' },
  { y: 2013, label: '2013', t: 'Uruguay, primer país en regular el mercado de cannabis.', kind: 'ley' },
  { y: 2018, label: '2018', t: 'Canadá legaliza el cannabis recreativo.', kind: 'ley' },
  { y: 2019, label: '2019', t: 'La FDA aprueba la esketamina para la depresión resistente.', kind: 'ciencia' },
  { y: 2023, label: '2023', t: 'Australia permite a psiquiatras prescribir MDMA y psilocibina.', kind: 'ciencia' },
  { y: 2024, label: '2024', t: 'Alemania legaliza la posesión y el autocultivo de cannabis.', kind: 'ley' },
];

/** Convierte años tipo '7000 a. C.' o '1950s' en número para ordenar. */
export function parseYear(s: string): number {
  const n = parseInt(s.replace(/[^\d]/g, ''), 10);
  return /a\.\s?C/.test(s) ? -n : n;
}

export const myths = [
  { m: 'El cannabis no engancha.', r: 'Alrededor de 1 de cada 10 personas que lo consumen desarrolla un trastorno por consumo de cannabis; la cifra sube si se empieza en la adolescencia.' },
  { m: 'Con MDMA hay que beber mucha agua.', r: 'Beber en exceso causa hiponatremia, potencialmente mortal. Lo recomendable es beber a sorbos (~250–500 ml/h si se baila) y descansar.' },
  { m: 'Un café baja la borrachera.', r: 'La cafeína no reduce la alcoholemia: solo enmascara la somnolencia y aumenta la sensación de control.' },
  { m: 'Lo natural es seguro.', r: 'El opio, el tabaco, la datura o algunas setas son naturales y muy tóxicos. El origen no dice nada del riesgo.' },
  { m: 'Alcohol y cocaína se compensan.', r: 'Juntos forman cocaetileno, más tóxico para el corazón, y el alcohol invita a consumir más cocaína.' },
  { m: 'El LSD se queda en la médula para siempre.', r: 'Es un mito. El LSD se metaboliza y elimina en horas. Los «flashbacks» se explican por otros mecanismos (HPPD).' },
  { m: 'Una ducha fría saca de una sobredosis.', r: 'Ante una sobredosis de opioides: llamar al 112, naloxona si la hay y posición lateral de seguridad. Duchas o café no sirven.' },
  { m: 'La adicción es falta de voluntad.', r: 'Es un trastorno con bases biológicas, psicológicas y sociales. El estigma retrasa la búsqueda de tratamiento.' },
];

export const emergencies = [
  {
    k: 'Depresores y opioides',
    fams: ['opioides', 'depresores'],
    signs: ['No responde o casi no responde', 'Respiración lenta, ronquidos o pausas', 'Labios y uñas azulados', 'Pupilas puntiformes (opioides)'],
    do: ['Llamar al 112', 'Si respira: posición lateral de seguridad', 'Si no respira: RCP según indique el 112', 'Opioides: naloxona si está disponible (repetir si hace falta)', 'No dejarla sola, aunque parezca que duerme'],
    dont: ['No dar café ni más sustancias', 'No meterla en la ducha', 'No provocar el vómito'],
  },
  {
    k: 'Estimulantes y empatógenos',
    fams: ['estimulantes', 'empatogenos'],
    signs: ['Temperatura muy alta, piel caliente y seca', 'Confusión o agitación extrema', 'Dolor en el pecho', 'Convulsiones'],
    do: ['Llamar al 112', 'Llevarla a un lugar fresco y tranquilo', 'Enfriar con paños húmedos y abanicar', 'Dar agua a sorbos solo si está consciente', 'Dolor torácico = urgencia siempre'],
    dont: ['No sujetar con fuerza si convulsiona', 'No dejarla seguir bailando', 'No dar alcohol ni más estimulantes'],
  },
  {
    k: 'Psicodélicos y disociativos',
    fams: ['psicodelicos', 'disociativos'],
    signs: ['Pánico, angustia o paranoia', 'Desorientación', 'Conductas de riesgo', 'Incapacidad de moverse (disociativos)'],
    do: ['Llevarla a un espacio tranquilo, con poca luz y ruido', 'Hablar con calma, recordar que es la sustancia y que pasará', 'Vigilar que no se haga daño', 'Si hay signos físicos graves o no mejora: 112'],
    dont: ['No discutir ni confrontar', 'No dejarla sola', 'No darle depresores para «bajarla»'],
  },
  {
    k: 'GHB / GBL',
    fams: ['depresores'],
    signs: ['Se queda dormida de golpe', 'No responde', 'Vómitos', 'Movimientos involuntarios'],
    do: ['Posición lateral de seguridad', 'Llamar al 112 y decir qué ha tomado', 'Vigilar la respiración continuamente', 'Despertar puede ser brusco y con agitación'],
    dont: ['Nunca dejarla «dormir la mona» sola', 'No dar alcohol', 'No intentar despertarla con agua fría'],
  },
];

/** Centroides aproximados [lat, lon]. */
export const geo: Record<string, [number, number]> = {
  ES: [40, -4], FR: [46.5, 2.5], DE: [51, 10], NL: [52.2, 5.5], GB: [53.5, -2], US: [39, -98],
  CA: [56, -106], AU: [-25, 134], CO: [4, -73], BR: [-10, -52], PL: [52, 19], SA: [24, 45],
  CZ: [49.8, 15.5], TH: [15, 101], IT: [42.8, 12.5], FI: [64, 26], EG: [26.8, 30], NG: [9, 8],
  PE: [-10, -76], HK: [22.3, 114.2], NO: [61, 9], UY: [-33, -56], AF: [34, 66], MM: [21, 96],
  MA: [32, -6], MX: [23, -102], BO: [-17, -65], IN: [22, 79], CN: [35, 104],
};

export const routes: { name: string; from: string[]; to: string[] }[] = [
  { name: 'Cocaína', from: ['CO', 'PE', 'BO'], to: ['US', 'ES', 'NL', 'AU', 'BR'] },
  { name: 'Heroína', from: ['AF', 'MM'], to: ['GB', 'DE', 'TH', 'AU'] },
  { name: 'Hachís', from: ['MA'], to: ['ES', 'FR', 'IT'] },
  { name: 'MDMA y anfetamina', from: ['NL'], to: ['GB', 'DE', 'ES', 'AU', 'PL'] },
  { name: 'Metanfetamina', from: ['MM', 'MX'], to: ['TH', 'AU', 'US', 'HK'] },
  { name: 'Fentanilo', from: ['MX', 'CN'], to: ['US', 'CA'] },
];
