// Generado por scripts/importar-diseno.mjs: la matriz es la compartida; solo cambian los colores de riesgo.
import { riskInfo as base, type Risk } from '../../../data/interactions';
export * from '../../../data/interactions';

const colors: Record<Risk, string> = {"S":"#9fcf8a","N":"#c9c5b8","D":"#7f93b8","C":"#e6c84a","U":"#ff8f3d","X":"#ff3d1f"};
export const riskInfo = Object.fromEntries(
  Object.entries(base).map(([k, v]) => [k, { ...v, color: colors[k as Risk] ?? v.color }]),
) as typeof base;
