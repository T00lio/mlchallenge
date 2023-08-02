const API = 'https://api.mercadolibre.com/sites/MLA/search?q=';

export function get(query) {
  return fetch(API + `${query}`).then(res => res.json());
}   