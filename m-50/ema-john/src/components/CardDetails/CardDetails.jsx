import React from "react";

const CardDetails = ({ carts }) => {
  console.log(carts);
    // const { id, price, img, name, ratings, seller, ratingsCount } = carts
  let total = 0;
  let totalShipping = 0;
  
  let quantity = 0;
  // console.log(carts);
    for (let cart of carts){
        total = total + cart.price
      totalShipping = totalShipping + cart.shipping
      quantity = quantity + cart.quantity
  }
  let tax = total * 7 / 100
  let grandTotal = total + totalShipping + tax
  console.log(quantity);
    // const shipping =  (carts[cart].shipping).reduce((total, number) => total + number, 0);
    // const price    =  (carts[cart].price).reduce((total, number) => total + number, 0);

    // const cartItem = carts.map(cart => cart.price);
    // const price = cartItem.reduce((total, number) => total + number, 0)
    
  return (
    <div className="bg-slate-50 rounded-lg py-6 px-2 mt-2 mr-4 fixed">
      <div className="text-left">
        <h1 className="text-2xl my-4  underline font-semibold">
          Order Summary
        </h1>
        <p className="text-xl">Selected Items: {carts.length} </p>
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
