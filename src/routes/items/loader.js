import { getData } from "utils";

export const itemsLoader = async ({ request }) => {
  let url = new URL(request.url);
  let searchTerm = url.searchParams.get("search");
  const response = await getData(`sites/MLA/search?q=${searchTerm}`);
  return response.results;
};
