import React from "react";
import Banner from "./Banner/Banner";
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      
      <Link to={'/AboutUs'}>About page</Link>
      <div>section</div>
      <div>section</div>
    </>
  );
};

export default Home;
