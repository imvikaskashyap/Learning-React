import React from "react";
import { useStateValue } from "../../../Context/StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [_, dispatch] = useStateValue();

  const removeFromCart = () => {
    // code to remove an item from the cart
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_img" src={image} />
      <div>
        <p>{title}</p>
        <p>
          <small>${price}</small>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map(_ => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
