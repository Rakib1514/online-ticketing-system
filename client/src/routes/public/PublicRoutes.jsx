import { Route, Routes } from "react-router";
import MainLayout from "../../layouts/main-layout/MainLayout";
import Home from "../../pages/home/Home";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        {/* Other Route goes here */}
        {/* <Route path="/about" element={<AboutPage/>} /> */}
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
