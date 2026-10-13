export type FamilyId =
  | 'opioides'
  | 'estimulantes'
  | 'empatogenos'
  | 'psicodelicos'
  | 'disociativos'
  | 'depresores'
  | 'cannabinoides'
  | 'deliriantes'
  | 'inhalantes';

export type Target =
  | 'mu'
  | 'dat'
  | 'sert'
  | '5ht2a'
  | 'nmda'
  | 'gabaa'
  | 'cb1'
  | 'machr'
  | 'adenosina'
  | 'nachr'
  | 'vaso';

export interface Family {
  id: FamilyId;
  code: string;
  name: string;
  color: string;
  tagline: string;
  description: string;
  mechanism: string;
  target: Target;
  targetLabel: string;
  risks: string[];
  /** posición en el triángulo estimulante / depresor / alucinógeno (0..1) */
  wheel: { stim: number; dep: number; hal: number };
}

export const families: Family[] = [
  {
    id: 'opioides',
    code: 'OP',
    name: 'Opioides',
    color: '#ff3b1f',
    tagline: 'Analgesia, euforia, depresión respiratoria',
    description:
      'Sustancias naturales (opiáceos, extraídos de la adormidera Papaver somniferum), semisintéticas o sintéticas que actúan sobre los receptores opioides del sistema nervioso. Son los analgésicos más potentes de la medicina y, a la vez, la familia responsable de la mayor parte de las muertes por sobredosis en el mundo.',
    mechanism:
      'Agonistas del receptor μ-opioide (MOR), acoplado a proteína Gi. Inhiben la adenilato ciclasa, abren canales de K⁺ y cierran canales de Ca²⁺, reduciendo la liberación de neurotransmisores. En el área tegmental ventral desinhiben las neuronas dopaminérgicas (vía GABA), lo que explica su alto potencial de refuerzo. En el tronco encefálico deprimen el centro respiratorio.',
    target: 'mu',
    targetLabel: 'Receptor μ-opioide',
    risks: ['Depresión respiratoria y muerte por sobredosis', 'Tolerancia y dependencia física rápidas', 'Síndrome de abstinencia', 'Adulteración con fentanilo/nitazenos'],
    wheel: { stim: 0.05, dep: 0.9, hal: 0.05 },
  },
  {
    id: 'estimulantes',
    code: 'ST',
    name: 'Estimulantes',
    color: '#d4ff3a',
    tagline: 'Activación, euforia, vigilia',
    description:
      'Sustancias que aumentan la actividad del sistema nervioso central y simpático: más energía, alerta, confianza y menos sueño y apetito. Incluyen desde sustancias legales y cotidianas (cafeína, nicotina) hasta psicoestimulantes potentes como la cocaína o la metanfetamina.',
    mechanism:
      'La mayoría actúa sobre los transportadores de monoaminas: la cocaína y el metilfenidato bloquean la recaptación de dopamina (DAT) y noradrenalina (NET); las anfetaminas y catinonas además invierten el transportador y liberan monoaminas de las vesículas (vía VMAT2 y TAAR1). Cafeína y nicotina actúan por otros mecanismos (adenosina y receptores nicotínicos).',
    target: 'dat',
    targetLabel: 'Transportador de dopamina (DAT)',
    risks: ['Cardiotoxicidad: arritmias, infarto, ictus', 'Psicosis estimulante', 'Hipertermia', 'Patrón compulsivo de consumo (atracones)'],
    wheel: { stim: 0.9, dep: 0.05, hal: 0.05 },
  },
  {
    id: 'empatogenos',
    code: 'EM',
    name: 'Empatógenos',
    color: '#ff2fb4',
    tagline: 'Conexión, empatía, euforia',
    description:
      'También llamados entactógenos. Producen sentimientos de cercanía emocional, apertura y empatía, junto con estimulación. Su representante principal es la MDMA, central en la cultura rave y techno desde finales de los 80, y actualmente investigada como coadyuvante en psicoterapia del TEPT.',
    mechanism:
      'Liberadores de serotonina: invierten el transportador de serotonina (SERT) y vacían las reservas de 5-HT, con efecto adicional sobre noradrenalina y dopamina. Aumentan la oxitocina y la prolactina. La depleción posterior de serotonina se relaciona con el bajón de los días siguientes.',
    target: 'sert',
    targetLabel: 'Transportador de serotonina (SERT)',
    risks: ['Golpe de calor / hipertermia', 'Hiponatremia por exceso de agua', 'Síndrome serotoninérgico', 'Bajón anímico posterior'],
    wheel: { stim: 0.55, dep: 0.05, hal: 0.4 },
  },
  {
    id: 'psicodelicos',
    code: 'PS',
    name: 'Psicodélicos',
    color: '#8a5cff',
    tagline: 'Percepción alterada, introspección',
    description:
      'Alucinógenos clásicos (triptaminas, ergolinas y fenetilaminas) que alteran profundamente la percepción, el pensamiento y la experiencia del yo. Baja toxicidad fisiológica y bajo potencial adictivo, pero con riesgos psicológicos relevantes. Su uso terapéutico (depresión resistente, ansiedad al final de la vida, adicciones) es hoy un campo activo de investigación en psicología clínica.',
    mechanism:
      'Agonistas (parciales) del receptor serotoninérgico 5-HT2A, sobre todo en neuronas piramidales de la capa V de la corteza. Desorganizan la actividad de la red neuronal por defecto (DMN) y aumentan la conectividad global entre redes, lo que se relaciona con la «disolución del ego».',
    target: '5ht2a',
    targetLabel: 'Receptor 5-HT2A',
    risks: ['Experiencias de angustia intensa («mal viaje»)', 'Desencadenar psicosis en personas vulnerables', 'HPPD (trastorno perceptivo persistente)', 'Conductas de riesgo por desorientación'],
    wheel: { stim: 0.1, dep: 0.05, hal: 0.85 },
  },
  {
    id: 'disociativos',
    code: 'DS',
    name: 'Disociativos',
    color: '#00e5ff',
    tagline: 'Desconexión cuerpo-mente',
    description:
      'Producen sensación de separación entre la mente y el cuerpo o el entorno, anestesia y, a dosis altas, estados de desconexión total (el «k-hole»). Muchos se desarrollaron como anestésicos. La ketamina y su enantiómero (esketamina) se usan hoy como antidepresivos de acción rápida.',
    mechanism:
      'Antagonistas no competitivos del receptor NMDA de glutamato: bloquean el canal iónico, especialmente en interneuronas GABAérgicas, lo que provoca un aumento paradójico de glutamato en la corteza. Algunos (DXM, PCP) actúan también sobre receptores sigma y transportadores de monoaminas.',
    target: 'nmda',
    targetLabel: 'Receptor NMDA (glutamato)',
    risks: ['Accidentes y caídas por anestesia', 'Daño vesical (cistitis por ketamina)', 'Depresión respiratoria combinados con depresores', 'Deterioro de memoria con uso crónico'],
    wheel: { stim: 0.1, dep: 0.4, hal: 0.5 },
  },
  {
    id: 'depresores',
    code: 'DP',
    name: 'Depresores',
    color: '#4d7cff',
    tagline: 'Sedación, desinhibición, ansiólisis',
    description:
      'Sustancias que disminuyen la actividad del sistema nervioso central: relajan, desinhiben, reducen la ansiedad y, a dosis altas, producen sedación, coma y muerte. Incluye la droga con más daño social global (el alcohol) y algunos de los psicofármacos más prescritos en España (benzodiacepinas).',
    mechanism:
      'Potencian la neurotransmisión inhibitoria del GABA. Benzodiacepinas y barbitúricos son moduladores alostéricos positivos del receptor GABA-A (las benzodiacepinas aumentan la frecuencia de apertura del canal de Cl⁻; los barbitúricos su duración). El alcohol actúa sobre GABA-A y además inhibe el receptor NMDA. El GHB actúa sobre GABA-B y su propio receptor.',
    target: 'gabaa',
    targetLabel: 'Receptor GABA-A',
    risks: ['Depresión respiratoria potenciada al combinar depresores', 'Abstinencia potencialmente mortal (convulsiones, delirium)', 'Amnesia y sumisión química', 'Tolerancia y dependencia'],
    wheel: { stim: 0.05, dep: 0.85, hal: 0.1 },
  },
  {
    id: 'cannabinoides',
    code: 'CB',
    name: 'Cannabinoides',
    color: '#2bff88',
    tagline: 'Relajación, euforia, alteración sensorial',
    description:
      'Compuestos que actúan sobre el sistema endocannabinoide. El cannabis es la droga ilegal más consumida del mundo; sus efectos combinan rasgos depresores, estimulantes y alucinógenos. Los cannabinoides sintéticos («Spice») son agonistas completos mucho más potentes y tóxicos.',
    mechanism:
      'Agonistas del receptor CB1, uno de los receptores acoplados a proteína G más abundantes del cerebro, localizado presinápticamente: su activación inhibe la liberación de GABA y glutamato (señalización retrógrada). El THC es agonista parcial; los cannabinoides sintéticos suelen ser agonistas completos.',
    target: 'cb1',
    targetLabel: 'Receptor CB1',
    risks: ['Psicosis y esquizofrenia en vulnerables (alta potencia, inicio temprano)', 'Trastorno por consumo de cannabis', 'Síndrome de hiperémesis cannabinoide', 'Deterioro cognitivo en adolescentes'],
    wheel: { stim: 0.3, dep: 0.4, hal: 0.3 },
  },
  {
    id: 'deliriantes',
    code: 'DL',
    name: 'Deliriantes',
    color: '#ffb300',
    tagline: 'Delirio, confusión, alucinaciones reales',
    description:
      'Anticolinérgicos que producen un estado de delirio: confusión, amnesia y alucinaciones verosímiles (hablar con personas que no están, fumar cigarrillos inexistentes), sin la lucidez de los psicodélicos. Uso recreativo minoritario y casi siempre desagradable; alta toxicidad.',
    mechanism:
      'Antagonistas de los receptores muscarínicos de acetilcolina (mAChR), principalmente M1 en la corteza y el hipocampo. Bloquean también el sistema parasimpático: taquicardia, midriasis, sequedad, retención urinaria e hipertermia.',
    target: 'machr',
    targetLabel: 'Receptor muscarínico (ACh)',
    risks: ['Síndrome anticolinérgico tóxico', 'Hipertermia y taquiarritmias', 'Amnesia completa del episodio', 'Uso criminal (sumisión química)'],
    wheel: { stim: 0.15, dep: 0.25, hal: 0.6 },
  },
  {
    id: 'inhalantes',
    code: 'IN',
    name: 'Inhalantes',
    color: '#c0c0c0',
    tagline: 'Efecto breve, intenso, volátil',
    description:
      'Gases y vapores que se inhalan: disolventes, gases de mechero, aerosoles y nitritos de alquilo («poppers»). Efectos de segundos a minutos. Son baratos y accesibles, por lo que su consumo es frecuente en adolescentes y en poblaciones en situación de exclusión.',
    mechanism:
      'Heterogéneo. Los disolventes volátiles (tolueno, butano) actúan de forma similar a los depresores (GABA-A, NMDA). Los nitritos de alquilo liberan óxido nítrico y producen vasodilatación brusca del músculo liso.',
    target: 'vaso',
    targetLabel: 'Vasodilatación (óxido nítrico)',
    risks: ['Muerte súbita por inhalación (arritmia)', 'Asfixia', 'Neurotoxicidad con uso crónico', 'Hipotensión grave con sildenafilo (poppers)'],
    wheel: { stim: 0.2, dep: 0.6, hal: 0.2 },
  },
];

export const familyById = Object.fromEntries(families.map((f) => [f.id, f])) as Record<FamilyId, Family>;
