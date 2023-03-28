import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
// const [gobal, setGobal] = useState([]);
// const gobalCart = ()=>{
//   return gobal;
// }

const Card = (props) => {
  
  const [products, setProducts] = useState([]);
  // for cartPart  // cart sessions 
  const cartPart = props.cartPart
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addCart = (product) => {
    const newCarts= [...carts, product];
    setCarts(newCarts);
    cartPart(newCarts);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => <Product carts={carts}  data={product} addCart={addCart} key={product.id}></Product>)}
    </div>
  );
};

export {
  Card
};
