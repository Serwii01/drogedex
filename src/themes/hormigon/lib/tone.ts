import type { FamilyId } from '../../../data/families';

/** Sin color: cada familia es un tono de gris del hormigón. */
export const paper: Record<FamilyId, string> = {
  opioides: '#d6d6d1',
  estimulantes: '#b8b8b2',
  empatogenos: '#9d9d97',
  psicodelicos: '#85857f',
  disociativos: '#70706b',
  depresores: '#5e5e59',
  cannabinoides: '#4f4f4b',
  deliriantes: '#43433f',
  inhalantes: '#383835',
};

export const ACCENT = '#f2f2ee';
export const PAPER = '#c9c9c4';
