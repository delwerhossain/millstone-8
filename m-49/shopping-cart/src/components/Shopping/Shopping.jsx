import React, { useEffect, useState } from "react";
import { addtoCard, removeCart } from "./Shopping";
// import addtoCard from './Shopping.js'

const Shopping = () => {
    
  const [shops, setShop] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => setShop(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className=" px-4 py-4 rounded-lg grid grid-cols-1 lg:grid-cols-2  md:grid-cols-2 gap-8">
      {shops.map((card) => {
        let {id , price ,image,description , title} = card
        return (
          <div className=" bg-white rounded-lg text-stone-900 text-left px-4 py-4 border border-red-500">
          <img className="object-scale-down h-48 w-96 " src={image} alt="" />
            <h3><span className="font-bold text-xl">product name :</span> {title.slice(31)} </h3>
            <p> <span className="font-bold text-xl">details :</span>  {description.slice(31)}</p>
            <h4><span className="font-bold text-xl">price :</span>  {price}</h4> <p>product code : {id}</p>
            <button className="text-2xl  bg-slate-500 mx-4 my-4 text-stone-50" onClick={()=>addtoCard(id)}> AddToCard</button>
            <button className="text-2xl  bg-slate-500 mx-4 my-4 text-stone-50" onClick={()=>removeCart(id)}> Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default Shopping;
