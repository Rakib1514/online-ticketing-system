import { Outlet } from "react-router";
import Navbar from "../../pages/shared/navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <div>navbar</div> */}
      <main>
        <Outlet />
      </main>
      {/* <footer>footer</footer> */}
    </div>
  );
};

export default MainLayout;
