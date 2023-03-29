import React from "react";

const CardDetails = ({ carts }) => {
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (let cart of carts) {
    // if (cart) {
    console.log(cart);
    // if (cart.quantity === 0) {
    //   cart.quantity = 1
    // }
    cart.quantity = cart.quantity || 1;
    total = total + cart.price * cart.quantity;
    totalShipping = totalShipping + cart.shipping;
    quantity = quantity + cart.quantity;
      
    // }
  }
  let tax = (total * 7) / 100;
  let grandTotal = total + totalShipping + tax;
  // console.log("quantity : ", quantity);

  return (
    <div className="bg-slate-50 rounded-lg py-6 px-2 mt-2 mr-4 fixed">
      <div className="text-left">
        <h1 className="text-2xl my-4  underline font-semibold">
          Order Summary
        </h1>
        <p className="text-xl">Selected Items: {quantity} </p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charge: ${totalShipping}</p>
        <p>Tax: ${tax}</p>
        <p>Grand Total: ${grandTotal}</p>
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
