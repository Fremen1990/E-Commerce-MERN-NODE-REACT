import React from "react";
import Layout from "./Layout";
import { API } from "../config";

const Home = () => (
  <Layout
    title="Home Page"
    description="MERN Node React Full Stack E-Commerce App"
  >
    {API}
    ....
  </Layout>
);

export default Home;
