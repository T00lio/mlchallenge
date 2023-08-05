import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootPage, { IndexRoot } from "./root";
import ItemsPage, { itemsLoader } from "./items";
import ItemDescriptionPage, { itemDescriptionLoader } from "./item-description";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootPage />}>
      <Route index element={<IndexRoot />} />
      <Route path="items" element={<ItemsPage />} loader={itemsLoader} />
      <Route path="items/:itemId" element={<ItemDescriptionPage />} loader={itemDescriptionLoader} />
    </Route>,
  ),
);

export default router;
