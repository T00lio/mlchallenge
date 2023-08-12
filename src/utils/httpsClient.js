export const API = "https://api.mercadolibre.com/";

export async function getData(params) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/${params}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
