import React from "react";

const CardDetails = ({carts}) => {
    // const { id, price, img, name, ratings, seller, ratingsCount } = carts
    let total = 0;
    for (let cart of carts){
        total = total + cart
    }
    // const shipping =  (carts[cart].shipping).reduce((total, number) => total + number, 0);
    // const price    =  (carts[cart].price).reduce((total, number) => total + number, 0);

    // const cartItem = carts.map(cart => cart.price);
    // const price = cartItem.reduce((total, number) => total + number, 0)
    
  return (
    <div className="bg-slate-50 rounded-lg py-6 px-2 fixed">
      <div className="text-left">
        <h1 className="text-2xl my-4  underline font-semibold">
          Order Summary
        </h1>
        <p className="text-xl">Selected Items: {carts.length} </p>
        <p>Total Price: ${}</p>
        <p>Total Shipping Charge: ${}</p>
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
