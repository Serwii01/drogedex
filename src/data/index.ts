import { opioides, estimulantes } from './substances-a';
import { empatogenos, psicodelicos, disociativos, depresores, cannabinoides, deliriantes, inhalantes } from './substances-b';
import type { Substance } from './types';

export const substances: (Substance & { n: number })[] = [
  ...opioides,
  ...estimulantes,
  ...empatogenos,
  ...psicodelicos,
  ...disociativos,
  ...depresores,
  ...cannabinoides,
  ...deliriantes,
  ...inhalantes,
].map((s, i) => ({ ...s, n: i + 1 }));

export const bySlug = Object.fromEntries(substances.map((s) => [s.slug, s]));

export const countries: Record<string, string> = {
  ES: 'España', FR: 'Francia', DE: 'Alemania', NL: 'Países Bajos', GB: 'Reino Unido', US: 'EE. UU.',
  CA: 'Canadá', AU: 'Australia', CO: 'Colombia', BR: 'Brasil', PL: 'Polonia', SA: 'Arabia Saudí',
  CZ: 'Chequia', TH: 'Tailandia', IT: 'Italia', FI: 'Finlandia', EG: 'Egipto', NG: 'Nigeria',
  PE: 'Perú', HK: 'Hong Kong', NO: 'Noruega', UY: 'Uruguay',
};

export const pad = (n: number) => String(n).padStart(3, '0');
