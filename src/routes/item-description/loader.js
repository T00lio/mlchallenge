import { getData } from "../../utils/api";

export const itemDescritionLoader = async ({ params }) => {
  const [item, description] = await Promise.all([
    getData(`items/${params.id}`),
    getData(`items/${params.id}/description`),
  ]).then(([item, description]) => [item, description.plain_text]);
  return { item, description };
};
