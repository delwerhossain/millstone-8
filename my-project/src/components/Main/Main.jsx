import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";

const Main = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
    const addtoCart = (cart) => {
        useEffect(() => {
            
        },[])
     } 

  return (
    <div className="grid lg:grid-cols-4 grid-cols-3  rounded-lg pt-12">
      <div className="lg:col-span-3 col-span-2  bg-blue-300 pt-3 ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-3 justify-around content-center">
          {products.map((product) => (
            <Cards product={product} addtoCart ={addtoCart}></Cards>
          ))}
        </div>
      </div>

      <div className="col-span-1 bg-red-300">
      </div>
    </div>
  );
};

export default Main;
