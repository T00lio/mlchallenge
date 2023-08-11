import { Outlet } from "react-router-dom";
import Header from "../Header";

function Root() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}

export default Root;
