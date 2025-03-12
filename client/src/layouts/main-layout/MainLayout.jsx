import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      {/* <div>navbar</div> */}
      <main>
        <Outlet />
      </main>
      {/* <footer>footer</footer> */}
    </div>
  );
};

export default MainLayout;
