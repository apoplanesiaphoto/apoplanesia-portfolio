export const CATEGORY_URL_MAP = {
  casais: '/portfolio/casais/',
  retrato: '/portfolio/retrato/',
  maternidade: '/portfolio/maternidade/',
  boudoir: '/portfolio/boudoir/',
  eventos: '/portfolio/eventos/'
};

export const REVERSE_CATEGORY_MAP = {
  casais: 'casais',
  retrato: 'retrato',
  maternidade: 'maternidade',
  boudoir: 'boudoir',
  eventos: 'eventos'
};

export function getCategoryUrl(categoryId) {
  return CATEGORY_URL_MAP[categoryId] || '/portfolio/';
}
