import React from "react";

const Product = (props) => {
  const { id, price, img, name, ratings, seller, ratingsCount } = props.data;
  console.log(props.data);
  return (
    <div className="text-black bg-white rounded-lg relative">
      <img className="w-full rounded-t-lg" src={img} alt="" />
      <div className="px-4 my-2">
        <p className="text-4xl"> name : {name}</p>
        <p className=""> Seller : {seller}</p>
        <p className=""> Price : {price}</p>
        <p className=""> Ratings : {ratings}stars</p>
        <p className=""> Total Ratings: {ratingsCount}</p>
      </div>
      <div className="bg-orange-400 hover:bg-orange-500  h-16 rounded-b-lg  bottom-0 grid content-center justify-center ">
        <button className="btn bg-red-600 text-white border-white">Add to Cart</button>
      </div>
    </div>
  );
};

// {data.forEach((element) => {
//     let { id, price, img, name, ratings, seller } = element;
//     console.log(name);
//     return (
//       <div>
//         <img src={img} alt="" />
//         <h1> name : {name}</h1>
//       </div>
//     );
//   })}
export default Product;
