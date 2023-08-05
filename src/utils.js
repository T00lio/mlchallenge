export async function getData(endpoint) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/${endpoint}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
