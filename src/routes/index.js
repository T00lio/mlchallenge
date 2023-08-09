import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootPage, { IndexRoot } from "./root";
import ItemsPage, { itemsLoader } from "./items";
import ItemDescriptionPage, { itemDescriptionLoader } from "./item-description";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootPage />}>
      <Route index={<IndexRoot />} />
      <Route path="items" element={<ItemsPage />} loader={itemsLoader} />
      <Route
        path="items/:id"
        element={<ItemDescriptionPage />}
        loader={itemDescriptionLoader}
      />
    </Route>
  )
);

export default router;
