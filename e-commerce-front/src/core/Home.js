import React from "react";
import Layout from "./Layout";

const Home = () => (
  <Layout
    title="Home Page"
    description="MERN Node React Full Stack E-Commerce App"
  >
    {process.env.REACT_APP_API_URL}
    ....
  </Layout>
);

export default Home;
