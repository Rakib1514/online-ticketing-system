import { Outlet } from "react-router";
import Navbar from "../../pages/shared/navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default MainLayout;
