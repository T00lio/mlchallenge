import { getData } from "utils";

export const itemDescriptionLoader = async ({ params }) => {
  const [item, description] = await Promise.all([
    getData(`items/${params.itemId}`),
    getData(`items/${params.itemId}/description`),
  ]);
  return { item, description };
};
