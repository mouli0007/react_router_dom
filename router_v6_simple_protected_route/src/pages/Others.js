import React from "react";

import { Link, Outlet, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import products from "../data";

function Others() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const { image, name } = product;
  return (
    <section className="section products">
      <h2>Single Product</h2>
      <h3>{name}</h3>
      <img src={image} alt="" />
    </section>
  );
}

export default Others;
