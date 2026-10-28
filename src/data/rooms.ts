import { substances } from './index';

export const rooms = [
  { href: '/sustancias', label: 'Índice', sub: `${substances.length} sustancias` },
  { href: '/familias', label: 'Familias', sub: '9 grupos farmacológicos' },
  { href: '/mezclas', label: 'Mezclas', sub: 'comprobador de combinaciones' },
  { href: '/combinaciones', label: 'Matriz', sub: 'tabla 21 × 21' },
  { href: '/comparar', label: 'Comparar', sub: 'dos sustancias cara a cara' },
  { href: '/psicologia', label: 'Psicología', sub: 'DSM-5 · modelos · intervención' },
  { href: '/mapa', label: 'Mapa', sub: 'precios y rutas' },
  { href: '/cronologia', label: 'Cronología', sub: 'de 7000 a. C. a hoy' },
  { href: '/graficos', label: 'Datos', sub: 'gráficos y fuentes' },
  { href: '/glosario', label: 'Glosario', sub: 'términos clave' },
  { href: '/emergencias', label: 'Emergencias', sub: 'qué hacer' },
  { href: '/metodologia', label: 'Método', sub: 'fuentes y límites' },
  { href: '/galeria', label: 'Galería', sub: 'fotografías reales' },
];
