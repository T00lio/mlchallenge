const searchAPI = "https://api.mercadolibre.com/";
export const DeetAPI = "https://api.mercadolibre.com/items/";

export function get(query) {
  return fetch(searchAPI + `${query}`).then((res) => res.json());
}

export let ProductDetailLoader = async ({ params }) => {
  const [item, description] = await Promise.all([
    fetch(`https://api.mercadolibre.com/items/${params.id}`),
    fetch(`https://api.mercadolibre.com/items/${params.id}/description`),
  ])
    .then(([item, description]) => [item.json(), description.json()])
    .then(([item, description]) => [item, description.plain_text]);
  return { item, description };
};
