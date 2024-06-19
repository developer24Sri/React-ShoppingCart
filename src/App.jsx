import React, { useState } from "react";
import Card from "./components/Card";
import CardHeader from "./components/CardHeader";
import "./index.css";

function App() {
  const [headerCount, setHeaderCount] = useState(0); //shows the addedcart number in the head of cart icon
  const [popupShow, setPopupShow] = useState(0); //used for button while clicking it, popup will be shown

  return (
    <div className="App">
     <CardHeader headerCount={headerCount} popupStatus={(status)=>{ setPopupShow(status) }}/>
      <Card setHeaderCount={(count)=>{ setHeaderCount(count) }} popupShow={popupShow} setPopupShow={setPopupShow} />
    </div>
  );
}

export default App;

/*
How headercount works ?
so headercount is a value that will show as an interger in the top of the cart icon let's take a Eventcase now,
a user clicking the add to cart button after adding the no. of kg for him/her at that time we need to check an condition that
(val.addedToCart === 1 && val.orderedq > 0) if this condition get passed then the count becomes 0 to 1 now these things happened in
card but the value should be get displayed in the Header so for that we send the value 1 as a prop from Child component Card.js to
parent component App.js like this (props.setHeaderCount(count);) now as we sended it hear we are creating a state for it initially we are
setting up the value as 0 by headerCount = 0 in the state and by using the (setHeaderCount={(count)=>{ setHeaderCount(count) }}) we are
updating the value 0 to 1 and we send that updated value to another child component called CardHeader like this (headerCount={headerCount})

How Popup Works ?
Hear we take a Eventcase, now a user added set of items in the card and clicks the addtocart button where in the cart icon we can able to see it as 1
now when we click that icon a popup should be shown so for that first in the child comp cardeheader we creating a onClick event (onClick={()=>{ props.popupStatus(1) }}) 
i.e while clicking that icon we are reciving a value as 1 so hear in app.js we initially set it as 0 now as becomes 1 with the help of this (popupStatus={(status)=>{ setPopupShow(status) }}) // can also be written as setpopupStatus={(status)=>{ setPopupShow(status) }}
which camed from header and we update that 1 in the card component using this (popupShow={popupShow}) where now the 1 travels to child component card from there we send it to popup.js where 
there we have writted an condtion that if (props.popupShow === 1) is true then return the popup.js contents and now there is a button in the popup.js which is used to close the popup.js 
so now we click the close button an event calls happens to card component there we have written a function which close the button which is nothing but it calls setPopupShow(0) i.e as zero which updates the setpopupShow hear in app.js to 0 with this (setPopupShow={setPopupShow})
*/
 