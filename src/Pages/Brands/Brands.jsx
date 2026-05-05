import React from 'react'
import './Brands.css'
import { MdDelete } from "react-icons/md";
import graphic1 from "../../assets/graphic1.png"
 import graphic2 from "../../assets/graphic2.png"
 import graphic3 from "../../assets/graphic3.png"

function Brands() {
  return (
    <div className="cart">

      <p className="para01">Your Cart</p>

      <div className="cart1">

      
        <div className="cart01">

        
          <div className="check">

            <div className="check-img">
              <img src={graphic1} alt="" />
            </div>

            <div className="check-content">
              <h3>Gradient Graphic T-shirt</h3>
              <p>Size: Large</p>
              <p>Color: White</p>
              <h2>$145</h2>
            </div>

            <div className="check-right">
              <MdDelete className="delete-icon"/>

              <div className="check-qty">   
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
            </div>

          </div>


          
          <div className="check">

            <div className="check-img">
              <img src={graphic2} alt="" />
            </div>

            <div className="check-content">
              <h3>Checkered Shirt</h3>
              <p>Size: Medium</p>
              <p>Color: Red</p>
              <h2>$180</h2>
            </div>

            <div className="check-right">
              <MdDelete className="delete-icon"/>

              <div className="check-qty">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
            </div>

          </div>


        
          <div className="check">

            <div className="check-img">
              <img src={graphic3} alt="" />
            </div>

            <div className="check-content">
              <h3>Skinny Fit Jeans</h3>
              <p>Size: Large</p>
              <p>Color: Blue</p>
              <h2>$240</h2>
            </div>

            <div className="check-right">
              <MdDelete className="delete-icon"/>

              <div className="check-qty">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
            </div>

          </div>

        </div>


        {/* Right Section */}
        <div className="cart02">
          <h2 className="summary-title">Order Summary</h2>

          <div className="summary-row">
            <p>Subtotal</p>
            <span>$565</span>
          </div>

          <div className="summary-row">
            <p>Discount (-20%)</p>
            <span>- $113</span>
          </div>

          <div className="summary-row">
            <p>Delivery Fee</p>
            <span>$15</span>
          </div>

          <hr />

          <div className="summary-row total">
            <p>Total</p>
            <span>$467</span>
          </div>

          <div className="promo">
            <input type="text" placeholder="Add promo code"/>
            <button>Apply</button>
          </div>

          <button className="checkout">
            Go to Checkout → 
          </button>

        </div>

      </div>

    </div>
  )
}

export default Brands   

