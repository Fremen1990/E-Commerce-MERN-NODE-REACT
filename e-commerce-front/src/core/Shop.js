import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";

const Shop = () => {
  return (
    <Layout
      title="Shop Page"
      description="Search and find what you want to buy...."
      className="container-fluid"
    >
      <divv className="row">
        <div className="col-4">Left sidebar</div>
        <div className="col-8">Right sidebar</div>
      </divv>
    </Layout>
  );
};
export default Shop;
