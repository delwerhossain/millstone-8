import React from "react";
import Cards from "../Cards/Cards";

const Main = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 bg-blue-300 ">
       <Cards></Cards>
          </div>
          
          {/* add to cart part */}
      <div className="col-span-1 bg-red-300">
        <h1>add to card part</h1>
      </div>
    </div> 
  );
};

export default Main;
