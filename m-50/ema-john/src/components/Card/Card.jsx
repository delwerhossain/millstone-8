import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Card = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => <Product data={product} key={product.id}></Product>)}
    </div>
  );
};

export default Card;
