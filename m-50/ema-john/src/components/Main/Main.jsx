import React, { useState } from "react";
import { Card } from "../Card/Card";
import CardDetails from "../CardDetails/CardDetails";

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
      <div className="h-screen p-2  bg-red-200 text-black text-center col-span-1 flex flex-col gap-2 relative ">
       <CardDetails></CardDetails>
      </div>
    </div>
  );
};

export default Main;
