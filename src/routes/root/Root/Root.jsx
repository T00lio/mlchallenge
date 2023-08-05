import { Outlet } from "react-router";
import Header from "routes/root/Header";

function Root() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}

export default Root;
