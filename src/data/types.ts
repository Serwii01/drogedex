import type { FamilyId, Target } from './families';

export interface Price {
  /** ISO 3166-1 alfa-2 */
  c: string;
  /** precio en euros */
  v: number;
  unit: string;
}

export interface Duration {
  /** horas hasta el inicio de los efectos */
  onset: number;
  /** horas [inicio, fin] de la meseta / pico */
  peak: [number, number];
  /** duración total en horas */
  total: number;
  /** vía de administración a la que se refieren los tiempos */
  route: string;
}

export interface Harm {
  /** 0–3, escala de Nutt et al. (2007) */
  physical: number;
  dependence: number;
  social: number;
  /** 'nutt2007' = valor publicado; 'est' = estimación editorial con la misma escala */
  src: 'nutt2007' | 'est';
}

export type ComboKey =
  | 'lsd' | 'psilo' | 'dmt' | 'mesc' | '2cb' | 'cann' | 'keta' | 'dxm' | 'n2o'
  | 'amph' | 'mdma' | 'coca' | 'caf' | 'alc' | 'ghb' | 'opi' | 'tram' | 'benzo'
  | 'imao' | 'isrs' | 'litio';

export interface Substance {
  slug: string;
  name: string;
  symbol: string;
  family: FamilyId;
  target?: Target;
  aka: string[];
  /** nombre de búsqueda en PubChem para la estructura 2D */
  pubchem?: string;
  cls: string;
  summary: string;
  mechanism: string;
  routes: string[];
  history: { year: string; place: string; text: string };
  consumption: { top: string[]; text: string };
  duration?: Duration;
  effects: { pos: string[]; neg: string[]; long: string[] };
  legal: string;
  prices: Price[];
  priceNote?: string;
  harm: Harm;
  reduction: string[];
  combo?: ComboKey;
}
