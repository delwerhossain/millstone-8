import React, { useState } from "react";
import {Card} from "../Card/Card";

const Main = () => {
  const [carts, setCarts] = useState([]);
  const cartPart = (allCartData) => {
    setCarts(allCartData);
  }
  return (
    <div className="bg-slate-300 grid grid-cols-5 gap-3">
      <div className="col-span-4 bg-blue-200">
        <Card cartPart = {cartPart}></Card>
      </div>
      <div className="bg-red-200 col-span-1">
        <h1 className="text-4xl text-black">card lenght: {carts.length}</h1>
      </div>
    </div>
  );
};

export default Main;
