import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <Link to={'/AboutUs'}>About page</Link>
      <div>section</div>
      <div>section</div>
    </>
  );
};

export default Home;
