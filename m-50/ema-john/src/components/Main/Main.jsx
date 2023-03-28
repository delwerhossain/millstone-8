import React, { useState } from "react";
import { Card } from "../Card/Card";

const Main = () => {
  const [carts, setCarts] = useState([]);
  const cartPart = (allCartData) => {
    setCarts(allCartData);
  };
  return (
    <div className="bg-slate-300 grid grid-cols-5 gap-3">
      <div className="col-span-4 bg-blue-200">
        <Card cartPart={cartPart}></Card>
      </div>
      <div className="h-screen p-2  bg-red-200 text-black text-center col-span-1 flex flex-col gap-2 relative fixed">
        <h1 className="text-2xl my-4  underline font-semibold">
          Order Summary
        </h1>
        <h1 className="text-xl">Selected Items: {carts.length}</h1>
        <p>Total Price: $1140</p>
        <p>Total Shipping Charge: $5</p>
        <p>Tax: $114</p>
        <p>Grand Total: $1559</p>

        <div className="absolute bottom-10">
          <button className="btn bg-orange-600 text-white border-none hover:border hover:border-white ">
            Clear Cart
          </button>
          <button className="btn bg-orange-300 text-white border-none hover:border hover:border-white ">
            Review Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
