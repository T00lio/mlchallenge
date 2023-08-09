import { getData } from "../../utils/httpsClient";

export const itemsLoader = async ({ request }) => {
  let url = new URL(request.url);
  let searchTerm = url.searchParams.get("search");
  const response = await getData(
    `https://api.mercadolibre.com/sites/MLA/search?q=${searchTerm}`
  );
  return response.results;
};
