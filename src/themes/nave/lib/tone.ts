import type { FamilyId } from '../../../data/families';

/** Cada familia = un color de papel de fotocopiadora. Apagados, no neón. */
export const paper: Record<FamilyId, string> = {
  opioides: '#d8574a',
  estimulantes: '#e6d35a',
  empatogenos: '#e391b1',
  psicodelicos: '#a397dc',
  disociativos: '#86c3c6',
  depresores: '#7593cc',
  cannabinoides: '#95c07f',
  deliriantes: '#d9a35a',
  inhalantes: '#b1ada2',
};

export const ACCENT = '#ff5a1f';
export const PAPER = '#e8e4d8';
