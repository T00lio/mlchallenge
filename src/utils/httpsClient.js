export const API = "https://api.mercadolibre.com/";

export async function getData(endpoint) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/${endpoint}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
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
