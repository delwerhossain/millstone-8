import React, { useState } from "react";
import { Card } from "../Card/Card";
import CardDetails from "../CardDetails/CardDetails";

const Main = () => {
  const [carts, setCarts] = useState([]);
  const cartPart = (allCartData) => {
    setCarts(allCartData);
  };

  return (
    <div className="bg-slate-300 grid lg:grid-cols-5 grid-cols-3 gap-3">
      <div className="lg:col-span-4 col-span-2 bg-blue-200">
        <Card cartPart={cartPart}></Card>
      </div>
      <div className="p-2  bg-red-200 text-black text-center col-span-1">
       <CardDetails carts={carts} ></CardDetails>
      </div>
    </div>
  );
};

export default Main;
