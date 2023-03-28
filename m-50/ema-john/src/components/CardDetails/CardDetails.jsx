import React from "react";

const CardDetails = () => {
  return (
    <div className="bg-slate-50 rounded-lg py-6 px-2 fixed">
      <div className="text-left">
      <h1 className="text-2xl my-4  underline font-semibold">Order Summary</h1>
      <p className="text-xl">Selected Items: </p>
      <p>Total Price: $1140</p>
      <p>Total Shipping Charge: $5</p>
      <p>Tax: $114</p>
      <p>Grand Total: $1559</p>
      </div>

      <div className="">
        <button className="btn px-6 my-4 bg-orange-600 text-white border-none hover:border hover:border-white ">
          Clear Cart
        </button>
        <button className="btn bg-orange-300 text-white border-none hover:border hover:border-white ">
          Review Order
        </button>
      </div>
    </div>
  );
};

export default CardDetails;
