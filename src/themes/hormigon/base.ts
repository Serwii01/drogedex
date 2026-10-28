// Generado por scripts/importar-diseno.mjs. Prefijo de URL del diseño hormigon.
export const BASE = '/hormigon';

/** Añade el prefijo del diseño a una ruta interna ('/sustancias/lsd' -> '/hormigon/sustancias/lsd'). Idempotente. */
export const u = <T,>(p: T): T => {
  if (typeof p !== 'string' || !p.startsWith('/') || p.startsWith('//')) return p;
  if (p === BASE || /^\/hormigon[/?#]/.test(p)) return p;
  return (p === '/' ? BASE : BASE + p) as T;
};
