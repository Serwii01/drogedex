/** DSM-5 (APA, 2013): criterios del trastorno por consumo de sustancias (paráfrasis). */
export const dsm5 = [
  { k: 'Control', t: 'Se consume en cantidades mayores o durante más tiempo del que se pretendía.' },
  { k: 'Control', t: 'Deseo persistente o esfuerzos fracasados de reducir o controlar el consumo.' },
  { k: 'Control', t: 'Se invierte mucho tiempo en conseguir la sustancia, consumirla o recuperarse de sus efectos.' },
  { k: 'Control', t: 'Craving: ansia o deseo intenso de consumir.' },
  { k: 'Social', t: 'El consumo provoca el incumplimiento de obligaciones en el trabajo, los estudios o el hogar.' },
  { k: 'Social', t: 'Se sigue consumiendo pese a problemas sociales o interpersonales causados o agravados por el consumo.' },
  { k: 'Social', t: 'Se abandonan o reducen actividades sociales, laborales o recreativas importantes.' },
  { k: 'Riesgo', t: 'Consumo recurrente en situaciones en las que es físicamente peligroso.' },
  { k: 'Riesgo', t: 'Se sigue consumiendo aun sabiendo que causa o empeora un problema físico o psicológico.' },
  { k: 'Farmacológico', t: 'Tolerancia: necesidad de más cantidad para el mismo efecto, o menor efecto con la misma cantidad.' },
  { k: 'Farmacológico', t: 'Abstinencia: síndrome característico al dejarlo, o consumo para aliviarlo o evitarlo.' },
];

export const severity = [
  { min: 0, max: 1, label: 'Sin trastorno', note: 'Menos de 2 criterios en 12 meses.' },
  { min: 2, max: 3, label: 'Leve', note: '2–3 criterios.' },
  { min: 4, max: 5, label: 'Moderado', note: '4–5 criterios.' },
  { min: 6, max: 11, label: 'Grave', note: '6 o más criterios.' },
];

/** Modelo transteórico (Prochaska y DiClemente, 1982). */
export const stages = [
  { n: 'Precontemplación', t: 'No hay intención de cambiar en los próximos 6 meses. No se percibe el problema.', i: 'Información, feedback sin confrontar, reducción de daños.' },
  { n: 'Contemplación', t: 'Se reconoce el problema y se plantea cambiar, pero con ambivalencia.', i: 'Balance decisional, entrevista motivacional.' },
  { n: 'Preparación', t: 'Intención de actuar en el próximo mes; pequeños pasos.', i: 'Plan de cambio, metas concretas, apoyo social.' },
  { n: 'Acción', t: 'Cambio activo y visible del comportamiento (< 6 meses).', i: 'TCC, manejo de contingencias, control de estímulos.' },
  { n: 'Mantenimiento', t: 'El cambio se sostiene más de 6 meses; prevención de recaídas.', i: 'Prevención de recaídas (Marlatt), estilo de vida alternativo.' },
  { n: 'Recaída', t: 'Vuelta al consumo: parte esperable del proceso, no un fracaso.', i: 'Normalizar, analizar desencadenantes, volver a entrar en el ciclo.' },
];

/** Ciclo de la adicción (Koob y Volkow, 2010, 2016). */
export const koob = [
  {
    n: 'Atracón / intoxicación',
    region: 'Ganglios basales (estriado ventral, núcleo accumbens)',
    t: 'Liberación de dopamina y opioides endógenos; los estímulos asociados al consumo adquieren saliencia de incentivo y se forman hábitos.',
  },
  {
    n: 'Abstinencia / afecto negativo',
    region: 'Amígdala extendida',
    t: 'Se recluta el sistema «antirrecompensa» (CRF, dinorfina): disforia, ansiedad e irritabilidad. Se consume para aliviar el malestar (refuerzo negativo).',
  },
  {
    n: 'Preocupación / anticipación',
    region: 'Corteza prefrontal',
    t: 'Craving y déficit de las funciones ejecutivas (inhibición, toma de decisiones), que facilitan la recaída ante señales y estrés.',
  },
];

export const biopsicosocial = {
  bio: { risk: ['Carga genética (heredabilidad 40–60%)', 'Inicio en la adolescencia (cerebro en maduración)', 'Trastornos mentales comórbidos (TDAH, depresión, TEPT)'], prot: ['Buena salud física', 'Ausencia de antecedentes familiares'] },
  psi: { risk: ['Impulsividad y búsqueda de sensaciones', 'Baja autoestima', 'Estrategias de afrontamiento evitativas', 'Experiencias adversas en la infancia'], prot: ['Autorregulación emocional', 'Habilidades sociales y de afrontamiento', 'Expectativas negativas realistas sobre las drogas'] },
  soc: { risk: ['Disponibilidad y normalización', 'Grupo de iguales consumidor', 'Exclusión social y pobreza', 'Estigma que dificulta pedir ayuda'], prot: ['Vínculo familiar seguro', 'Implicación escolar o laboral', 'Ocio alternativo y red de apoyo'] },
};

export const interventions = [
  { n: 'Reducción de riesgos y daños', t: 'Minimizar las consecuencias negativas sin exigir abstinencia: análisis de sustancias, naloxona, salas de consumo supervisado, intercambio de jeringuillas.' },
  { n: 'Entrevista motivacional', t: 'Miller y Rollnick (1991). Estilo colaborativo para explorar y resolver la ambivalencia. Especialmente útil en precontemplación y contemplación.' },
  { n: 'Terapia cognitivo-conductual', t: 'Identificar situaciones de alto riesgo, pensamientos y desencadenantes; entrenar habilidades de afrontamiento.' },
  { n: 'Prevención de recaídas', t: 'Marlatt y Gordon (1985). Distingue el desliz de la recaída y trabaja el «efecto de violación de la abstinencia».' },
  { n: 'Manejo de contingencias', t: 'Refuerzo positivo (vales, premios) contingente a analíticas negativas. Gran evidencia en estimulantes.' },
  { n: 'Tratamiento con agonistas', t: 'Metadona y buprenorfina en la dependencia de opioides: reducen mortalidad, delitos e infecciones.' },
  { n: 'Terapia familiar y comunitaria', t: 'CRAFT, terapia familiar multidimensional en adolescentes, refuerzo comunitario.' },
  { n: 'Mindfulness (MBRP)', t: 'Prevención de recaídas basada en mindfulness: observar el craving sin actuar («surfear la ola»).' },
];
