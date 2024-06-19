import React from "react";
import '../Styles/Popup.css';

export default function Popup(props) {
  if (props.popupShow === 1) {
    // Check if there are any items in the cart
    const itemsInCart = props.cardData.filter(val => val.addedToCart > 0);

    // Close the popup if the cart is empty
    if (itemsInCart.length === 0) {
      props.closePopup();
      return null;
    }

    return (
      <div className="popup">
        <div className="popup-sec">
          <button onClick={props.closePopup}>x</button>
          <div className="productData">
            {itemsInCart.map((val) => (
              <div key={val.id} className="popup-data">
                <span>
                  <img src={val.image} alt={val.title} />Name: {val.title}
                </span>
                <div>
                  <button onClick={() => props.Finalincrement(val.id)}>+</button>
                  <span>₹{val.price * val.finalOrderedq}</span>
                  <button onClick={() => props.Finaldecrement(val.id)}>-</button>
                  <span>{val.kg * val.finalOrderedq} kg</span>
                  <button onClick={() => props.removeFromCart(val.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
