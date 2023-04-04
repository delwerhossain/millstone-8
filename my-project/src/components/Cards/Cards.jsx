import React from "react";

const Cards = ({ product, addtoCart }) => {
  const { id, title, price, image, rating, category, description } = product;

  return (
    <div className="card-side rounded-lg w-11/12 bg-white shadow-xl my-4">
      <figure>
        <div className="mx-4 my-4">
          <img className="md:h-auto w-11/12 " src={image} alt={title} />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title.slice(0, 20)}
          <div className="badge badge-secondary">NEW</div>
        </h2>
              <p>{description.slice(0, 100)}</p>
              <button onClick={()=>addtoCart(id)} className="btn"></button>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Rating : {category}</div>

          <div className="badge badge-outline">rating : {rating.rate}</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
