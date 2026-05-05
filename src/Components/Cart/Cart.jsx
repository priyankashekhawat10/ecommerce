import React, { useContext } from "react";
import "./Cart.css";
import { MdDelete } from "react-icons/md";
import { CartContext } from "../../context/CartContext";

function Cart() {

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
    totalQuantity,
  } = useContext(CartContext);

  return (
    <div className="cart">

      <p className="para01">Your Cart</p>

      <div className="cart1">

        {/* LEFT SIDE */}
        <div className="cart01">

          {cartItems.map((item) => (
            <div className="check" key={item.id}>

              <div className="check-img">
                <img src={item.thumbnail} alt="" />
              </div>

              <div className="check-content">
                <h3>{item.title}</h3>
                <p>Size: M</p>
                <p>Color: Default</p>
                <h2>${item.price}</h2>
              </div>

              <div className="check-right">

                {/* DELETE */}
                <MdDelete
                  className="delete-icon"
                  onClick={() => removeFromCart(item.id)}
                />

                {/* QUANTITY */}
                <div className="check-qty">
                  <span onClick={() => decreaseQuantity(item.id)}>−</span>
                  <span>{item.quantity}</span>
                  <span onClick={() => increaseQuantity(item.id)}>+</span>
                </div>

              </div>

            </div>
          ))}

        </div>


        {/* RIGHT SIDE (ORDER SUMMARY + CHECKOUT) */}
        <div className="cart02">

          <h2 className="summary-title">Order Summary</h2>

          <div className="summary-row">
            <p>Total Items</p>
            <span>{totalQuantity}</span>
          </div>

          <div className="summary-row">
            <p>Total Price</p>
            <span>${totalPrice}</span>
          </div>

          <hr />

          <div className="summary-row total">
            <p>Grand Total</p>
            <span>${totalPrice}</span>
          </div>

          {/* PROMO CODE */}
          <div className="promo">
            <input type="text" placeholder="Add promo code" />
            <button>Apply</button>
          </div>

          {/* CHECKOUT BUTTON */}
          <button
            className="checkout"
            onClick={() => alert("Order Placed Successfully 🎉")}
          >
            Go to Checkout →
          </button>

        </div>

      </div>

    </div>
  );
}

export default Cart;