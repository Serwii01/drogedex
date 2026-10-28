// Generado por scripts/importar-diseno.mjs: la matriz es la compartida; solo cambian los colores de riesgo.
import { riskInfo as base, type Risk } from '../../../data/interactions';
export * from '../../../data/interactions';

const colors: Record<Risk, string> = {"S":"#7a7a74","N":"#62625d","D":"#4d4d49","C":"#9e9e98","U":"#c4c4be","X":"#f2f2ee"};
export const riskInfo = Object.fromEntries(
  Object.entries(base).map(([k, v]) => [k, { ...v, color: colors[k as Risk] ?? v.color }]),
) as typeof base;
