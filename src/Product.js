import React from "react";
import "./Product.css";

function Product(props) {
  return (
    <div className="Product">
      <div className="product__details">
        <h6 className="product__title">{props.title}</h6>
        <h5 className="product__price">{props.price}</h5>
        <div className="product__rating">
          {props.rating}
        </div>
        <img className="product__image" src={props.image}></img>
        <button className="product__addToBasket">Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
