import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../Utilities/fakedb";
import Product from "../Product/Product";


const Card = (props) => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  // for cartPart  // cart sessions
  const cartPart = props.cartPart;
  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // get data from local storage
  useEffect(() => {
    const savedProduct = [];
    const storedCart = getShoppingCart();
    for (const id in storedCart) {
      const addedCart = products.find((product) => product.id === id);
      if (addedCart) {
        const quantity = storedCart[id];
        addedCart.quantity = quantity;
        savedProduct.push(addedCart);
      }
    }
    setCarts(savedProduct);
    // cartPart(savedProduct)
  }, [products]);

  const addCart = (product) => {
    const newCarts = [...carts, product];
    setCarts(newCarts);
    // cartPart(newCarts);
    addToDb(product.id);
  };
  // cartPart(carts)

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-4 gap-6 m-4">
      {products.map((product) => (
        <Product
          cartPart={cartPart }
          carts={carts}
          data={product}
          addCart={addCart}
          key={product.id}
        ></Product>
      ))}
    </div>
  );
};

export { Card };
