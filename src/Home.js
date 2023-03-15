import React from "react";
import "./Home.css";
import Product from "./Product"

function Home() {
  return (
    <div className="Home">
      <div className="home__container">
        <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home__containerImage"></img>
      </div>
      <div className="home__row">
        <Product 
          title="Benett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Water Repelient Fabric for Men and Women (Brown)"
          price="$11.96"
          rating="⭐️⭐️⭐️⭐️⭐️"  
          image="https://www.pngall.com/wp-content/uploads/2/Bag-PNG-Image-File.png"
        />
        <Product
          title="Samsung 30L Convention Microwave Oven (30BRC2, Black, With Starter Kit)"
          price="$239"
          rating="⭐️⭐️⭐️⭐️"  
          image="https://www.pngall.com/wp-content/uploads/2/Bag-PNG-Image-File.png"
        />
      </div>
      <div className="home__row">
        <Product
          title="Harry Potter and The Philosophers Stone Paperback Book"
          price="$199.99"
          rating="⭐️⭐️⭐️⭐️⭐️"  
          image="https://www.nicepng.com/png/detail/766-7667052_harry-potter-and-the-philophers-stone-book-harry.png"
        />
        <Product
          title="Amaze Echo (3rd Generation) | Smart Speaker with Alexa, Charcoal Fabric"
          price="$98.99"
          rating="⭐️⭐️⭐️"  
          image="https://cdn.shopify.com/s/files/1/0627/9109/0407/products/one.png?v=1644998840"
        />
        <Product />
      </div> 
      <div className="home__row">
        <Product />
      </div>
    </div>
  );
}

export default Home;

