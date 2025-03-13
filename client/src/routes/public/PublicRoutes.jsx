import { Route, Routes } from "react-router";
import MainLayout from "../../layouts/main-layout/MainLayout";
import Home from "../../pages/home/Home";
import AboutUs from "../../pages/about-us/AboutUs";
import JoinUs from "../../pages/join-us/JoinUs";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/JoinUs" element={<JoinUs />} />
        {/* Other Route goes here */}
        {/* <Route path="/about" element={<AboutPage/>} /> */}
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
