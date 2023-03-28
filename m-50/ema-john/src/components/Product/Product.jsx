import React from "react";

const Product = (props) => {
  const { id, price, img, name, ratings, seller, ratingsCount } = props.data;
  // console.log(img);

  const addCart = props.addCart
  const carts = props.carts

  return (
    <div className="text-black bg-white rounded-lg  relative">
     <div className="m-2">
     <img className="w-full rounded-lg" src={img ? img :'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'} alt="" />
     </div>
      <div className="px-4 mt-2 mb-16">
        <p className="text-xl"> name : {name}</p>
        <p className=""> Seller : {seller}</p>
        <p className=""> Price : {price}</p>
        <p className=""> Ratings : {ratings}stars</p>
        <p className=""> Total Ratings: {ratingsCount}</p>
      </div>
      <div className="bg-orange-400 hover:bg-orange-500  h-16 rounded-b-lg  bottom-0 grid content-center justify-center absolute bottom-0 w-full">
        <button onClick={()=>addCart(props.data)} className="btn bg-red-600 text-white border-white">Add to Cart</button>
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
