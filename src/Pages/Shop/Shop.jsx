import React, { useState, useEffect } from 'react'
import './Shop.css'
import t1 from "../../assets/t1.png"
import t2 from "../../assets/t2.png"
import t3 from "../../assets/t3.png"
import t11 from "../../assets/t11.png"
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { BsThreeDots } from "react-icons/bs";

function Shop() {
  const [products, setProducts] = useState([])



  useEffect(() => {

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products)
        setProducts(data.products)
      })

  }, [])






  return (
    <>
       <div className='shop1'>

        <div className="tshirt">
          <div className="tshirt3">
            <img src={t1} alt="" />
            <img src={t2} alt="" />
            <img src={t3} alt="" />

          </div>
          <div className="tshirt1">
            <img src={t11} alt="" />
          </div>


        </div>
        <div className="tshirtS">
          <h1 className='tshirt-h'>
            ONE LIFE GRAPHIC T-SHIRT
          </h1>
          <div className="ratings">
            <p className='stars'>⭐⭐⭐⭐ 4.5/5  <br /> <br />
              $250 <span>$300</span> </p>
            <hr />
            <p className='graphic'>
              This graphic t-shirt which is perfect for any occasion. Crafted from a soft and <br />
              breathable fabric, it offers superior comfort and style.
            </p>
            <hr />



          </div>
          <div className="color-section">
  <p>Select Colors</p>

  <div className="colors">
    <span className="color-circle brown"></span>
    <span className="color-circle green"></span>
    <span className="color-circle blue"></span>
  </div>
</div>
          {/* <div className="color">
            <span>Select Colors</span>

            <div className="colors"></div>
            <div className="colors"></div>
            <div className="colors"></div>
          </div> */}
          <hr />
          <div className="size">
            <p className='size'>
              Choose Size
            </p>
            <div className="sizes1">
              <button className='sizes11'> Small </button>
              <button className='sizes11'>Medium</button>
              <button className='sizes111'>Large</button>
              <button className='sizes11'>X-large</button>
            </div>
            <hr />
            <div className="items">
              <button className='item1'>+</button>
              <button className='item'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div> 
       <div className="faq">
        <p className='faqp'>
          Product Details
        </p>
        <p className='faqp1'>
          Rating & Reviews
        </p>
        <p className='faqp'>
          product details
        </p>

      </div> 

       {/* <div className="latest">
        <div className="all">
          <p className='latest11'>All Reviews
           <span className='latest1'> (451)</span>
          </p>
        </div>
        <div className="buttons">
          <button className='b1'>Latest</button>
           <button className='b1'>What a review</button>
        </div>
      </div>  */}
      <div className="reviews-header">

        <div className="reviews-left">
          <h2>All Reviews <span className='latest1'>(451)</span></h2>
        </div>

        <div className="reviews-right">

          <button className="filter-btn">
            <HiAdjustmentsHorizontal />
          </button>

          <select className="latest">
            <option>Latest</option>
            <option>Oldest</option>
            <option>Top Rated</option>
          </select>

          <button className="write-btn">
            Write a Review
          </button>

        </div>

      </div> 
       <div className="fabric">

        <div className="fabric1">
          <div className="dot">
            <p className='starf'>
              ⭐⭐⭐⭐⭐
            </p>
            <button className='dots'><BsThreeDots /></button>
          </div>
          <h2 className='s'>
            Samantha D.✅
          </h2>
          <p className='go'>
            "I absolutely love this t-shirt! The design is unique and the fabric feels so <br />
            comfortable. As a fellow designer, I appreciate the attention to detail. It's <br />
            become my favorite go-to shirt."
          </p>
          <p className='post'>
            Posted on August 14, 2023
          </p>
        </div>


        <div className="fabric1">
          <div className="dot">
            <p className='starf'>
              ⭐⭐⭐⭐⭐
            </p>
            <button className='dots'><BsThreeDots /></button>
          </div>
          <h2 className='s'>
            Alex M.✅
          </h2>
          <p className='go'>
            "I absolutely love this t-shirt! The design is unique and the fabric feels so <br />
            comfortable. As a fellow designer, I appreciate the attention to detail. It's <br />
            become my favorite go-to shirt."
          </p>
          <p className='post'>
            Posted on August 14, 2023
          </p>
        </div>
        <div className="fabric1">
          <div className="dot">
            <p className='starf'>
              ⭐⭐⭐⭐⭐
            </p>
            <button className='dots'><BsThreeDots /></button>
          </div>
          <h2 className='s'>
            Olivia P.✅
          </h2>
          <p className='go'>
            "I absolutely love this t-shirt! The design is unique and the fabric feels so <br />
            comfortable. As a fellow designer, I appreciate the attention to detail. It's <br />
            become my favorite go-to shirt."
          </p>
          <p className='post'>
            Posted on August 14, 2023
          </p>
        </div>
        <div className="fabric1">
          <div className="dot">
            <p className='starf'>
              ⭐⭐⭐⭐⭐
            </p>
            <button className='dots'><BsThreeDots /></button>
          </div>
          <h2 className='s'>
            Liam K.✅
          </h2>
          <p className='go'>
            "I absolutely love this t-shirt! The design is unique and the fabric feels so <br />
            comfortable. As a fellow designer, I appreciate the attention to detail. It's <br />
            become my favorite go-to shirt."
          </p>
          <p className='post'>
            Posted on August 14, 2023
          </p>
        </div>
        <div className="fabric1">
          <div className="dot">
            <p className='starf'>
              ⭐⭐⭐⭐⭐
            </p>
            <button className='dots'><BsThreeDots /></button>
          </div>
          <h2 className='s'>
            Ava H.✅
          </h2>
          <p className='go'>
            "I absolutely love this t-shirt! The design is unique and the fabric feels so <br />
            comfortable. As a fellow designer, I appreciate the attention to detail. It's <br />
            become my favorite go-to shirt."
          </p>
          <p className='post'>
            Posted on August 14, 2023
          </p>
        </div>
        <div className="fabric1">
          <div className="dot">
            <p className='starf'>
              ⭐⭐⭐⭐⭐
            </p>
            <button className='dots'><BsThreeDots /></button>
          </div>
          <h2 className='s'>
            Samantha D.✅
          </h2>
          <p className='go'>
            "I absolutely love this t-shirt! The design is unique and the fabric feels so <br />
            comfortable. As a fellow designer, I appreciate the attention to detail. It's <br />
            become my favorite go-to shirt."
          </p>
          <p className='post'>
            Posted on August 14, 2023
          </p>
        </div>
        <button className='load'>Load more Reviews</button>
      </div> 
       <div className="selling2">

        <h1 className="selling-title2">TOP SELLING</h1>

        <div className="selling-container2">

          {
            products.slice(10, 14).map((item) => (
              <div className="card2" key={item.id}>

                <div className="card2-img">
                  <img src={item.thumbnail} alt="" />
                </div>

                <h3>{item.title}</h3>

                <div className="price2">
                  <h4>${item.price}</h4>
                </div>

              </div>
            ))
          }

        </div>

        <button className="view2">View All</button>

      </div>
      
 





    </>
  )
}

export default Shop
