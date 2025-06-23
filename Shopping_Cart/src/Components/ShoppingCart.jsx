import React, { useState } from "react";
import CartItem from "./CartItem";

function ShoppingCart() {
  const [ProdName, setProdName] = useState("");
  const [ProdPrice, setProdPrice] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = () => {
    if (!ProdName || !ProdPrice) return;

    const newItem = {
      id: Date.now(),
      name: ProdName,
      price: parseFloat(ProdPrice),
      quantity: 1,
    };

    //create new array and add item
    setCartItems([...cartItems, newItem]);

    setProdName("");
    setProdPrice("");

    console.log(cartItems);
  };



  const handleUpdateQuantity = (id , newQuantity) => {
     if(newQuantity< 1) return;
     const newArr = cartItems.map(item => 
        item.id === id ? {...item , quantity : newQuantity} :
        item
     )
    setCartItems(newArr);
  }


   const handelRemoveItems = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
   }

  const calcTotal = () =>{
       return cartItems.reduce(
        (sum , item) => sum + (item.price * item.quantity), 
        0
       ).toFixed(2);
  }

  return (
    <>
      {/* input section */}
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        <div className="input-section">
          <h2>Add Products</h2>

          <div className="input-group">
            <input
              type="text"
              placeholder="Product Name"
              value={ProdName}
              onChange={(e) => setProdName(e.target.value)}
            />
            <input
              type="number"
              step="0.5"
              min="0"
              placeholder="Price"
              value={ProdPrice}
              onChange={(e) => setProdPrice(e.target.value)}
            />
            <button onClick={handleAddProduct}>Add to Cart</button>
          </div>
        </div>
      </div>

      {/* cart section */}
      <div className="cart-section">
        <h2>Your Cart</h2>
        <div className="cart-header">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
          <span>Actions</span>
        </div>
        {/* display items */}
        <div>
          {cartItems.length === 0 ? (
            <div className="empty-cart">Your cart is empty</div>
          ) : (
           <div>
              {cartItems.map((item) => {
               return <CartItem 
                  key= {item.id}
                  item={item}
                  OnUpdateQuantity = {handleUpdateQuantity}
                  onRemove = {handelRemoveItems}
                 />
              }) }
         </div>
          )}
        </div>

        {/* footer */}

        <div className="cartfooter">
          <div className="cart-total">
            Total: {calcTotal()}
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;

//break till 10:00
