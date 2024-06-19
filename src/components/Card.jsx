import React from "react";
import { useState } from "react";
import Popup from "./Popup";
import data from "../data/data";
import "../Styles/CardStyle.css";

export default function Card(props) {
  const [cardData, setCardData] = useState(data);

  function increment(id) {
    let updateCopy = cardData.map((val) => {
      if (val.id === id) {
        return { ...val, orderedq: val.orderedq + 1 };
      } else return val;
    });
    setCardData(updateCopy);
    updateHeaderCount(updateCopy);
  }

  function decrement(id) {
    let updateCopy = cardData.map((val) => {
      if (val.id === id && val.orderedq > 0) {
        return { ...val, orderedq: val.orderedq - 1 };
      } else return val;
    });
    setCardData(updateCopy);
  }

  function handleHeaderCount(id) {
    let updateCopy = cardData.map((val) => {
      if (val.id === id) {
        return { ...val, addedToCart: 1, finalOrderedq: val.finalOrderedq + val.orderedq }; //we are setting two things one is addtocart value as 1 and finalorderedq = 1 + 2(or)3(or)4 how many + or - button the user clicked it (the reasion behind adding the orderq with finalorderq is that this added value will be shown in the popup.js initially at there we can perform + & - which is ir-relevent to these buttons hear) 
      } else return val;
    });
    setCardData(updateCopy);
    updateHeaderCount(updateCopy);
  }

  function updateHeaderCount(updateCopy) {
    let count = 0;
    updateCopy.forEach((val) => {
      if (val.addedToCart === 1 && val.orderedq > 0) {
        count++;
      }
    });
    props.setHeaderCount(count); //sending this HeaderCount value to CardHeader.js through props via app.js(Child to Parent)
  }

  function Finalincrement(id) {
    let updateCopy = cardData.map((val) => {
      if (val.id === id) {
        return { ...val, finalOrderedq: val.finalOrderedq + 1 };
      } else return val;
    });
    setCardData(updateCopy);
    updateHeaderCount(updateCopy);
  }

  function Finaldecrement(id) {
    let updateCopy = cardData.map((val) => {
      if (val.id === id) {
        return { ...val, finalOrderedq: val.finalOrderedq - 1 };
      } else return val;
    });
    setCardData(updateCopy);
    updateHeaderCount(updateCopy);
  }

  function removeFromCart(id) {
    let updateCopy = cardData.map((val) => {
      if (val.id === id) {
        return { ...val, addedToCart: 0, orderedq: 0 };
      } else return val;
    });
    setCardData(updateCopy);
    updateHeaderCount(updateCopy);

    // Check if the cart is empty and close the popup if it is
    const cartNotEmpty = updateCopy.some(val => val.addedToCart > 0);
    if (!cartNotEmpty) {
      props.setPopupShow(0);
    }
  }

  function closePopup() {
    props.setPopupShow(0);
  }

  return (
    <>
      <div className="card-container">
        <div className="card-wrapper">
          {cardData.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.title} className="card-image" />
              <h3 className="card-title">{item.title}</h3>
              <p className="card-price-weight">
                <span><span>{item.kg} kg cost </span>₹{item.price}</span> 
              </p>
              <div className="card-controls">
                <button onClick={() => increment(item.id)}>+</button>
                <span className="card-total-price">₹ {item.price * item.orderedq}</span>
                <button onClick={() => decrement(item.id)}>-</button>
                <span className="card-total-weight">{item.kg * item.orderedq} kg</span>
              </div>
              <button className="card-add-button" onClick={() => handleHeaderCount(item.id)}>
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <Popup
        popupShow={props.popupShow} //comes from app.js to make the popup value 1 and sending it to popup.js so that it can open it
        cardData={cardData}  //goes to Popup.js to populate data over there also
        closePopup={closePopup} //goes to Popup.js
        removeFromCart={removeFromCart} //goes to Popup.js
        Finalincrement={Finalincrement} //goes to Popup.js
        Finaldecrement={Finaldecrement} //goes to Popup.js
      />
    </>
  );
}
