import React from "react";
import Card from "../Card/Card";

const Main = () => {
  return (
    <div className="bg-slate-300 grid grid-cols-5 gap-4">
      <div className="col-span-4 bg-blue-200">
        <h1>card</h1>
        <Card></Card>
      </div>
      <div className="bg-red-200 col-span-1">
      <h1>card</h1>

      </div>
    </div>
  );
};

export default Main;
