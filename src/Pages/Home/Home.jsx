import './Home.css'
import React, { useEffect, useState, useContext } from 'react'
import Cloth1 from "../../assets/Rectangle.png"
import versace from "../../assets/versace.png"
import calvin from "../../assets/calvin.png"
import gucci from "../../assets/gucci.png"
import parada from "../../assets/parada.png"
import zara from "../../assets/zara.png"
import casual from "../../assets/casual.png"
import formal from "../../assets/formal.png"
import party from "../../assets/party.png"
import gym from "../../assets/gym.png"
import { LiaArrowLeftSolid, LiaArrowRightSolid } from "react-icons/lia";
import { CartContext } from "../../context/CartContext";

export default function Home() {

  const [products, setProducts] = useState([])
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products)
      })
  }, [])

  return (
    <>
      {/* HERO */}
      <div className='cloth'>
        <div className="detail fade-up">
          <h1>
            FIND CLOTHES Aadil<br />
            THAT MATCHES priyanka <br />
            YOUR STYLE
          </h1>
          <p>
            Browse through our diverse range of garments
          </p>
          <button>Shop Now</button>
        </div>

        <div className="style fade-up delay-2">
          <img src={Cloth1} alt="cloth" />
        </div>
      </div>

      {/* BRANDS */}
      <div className="brands fade-up delay-1">
        <img src={versace} alt="" />
        <img src={calvin} alt="" />
        <img src={zara} alt="" />
        <img src={parada} alt="" />
        <img src={gucci} alt="" />
      </div>

      {/* NEW ARRIVALS */}
      <div className="arrival">
        <h1 className="arrival-title fade-up">NEW ARRIVALS</h1>

        <div className="arrival-container">
          {products.slice(0, 4).map((item, index) => (
            <div 
              className={`card fade-up delay-${index}`} 
              key={item.id}
            >
              <div className="card-img">
                <img src={item.thumbnail} alt="" />
              </div>

              <h3>{item.title}</h3>

              <div className="price">
                <h4>${item.price}</h4>
              </div>

              <button
                className='pp'
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <button className="view">View All</button>
      </div>

      {/* TOP SELLING */}
      <div className="selling">
        <h1 className="selling-title fade-up">TOP SELLING</h1>

        <div className="selling-container">
          {products.slice(10, 14).map((item, index) => (
            <div 
              className={`card1 fade-up delay-${index}`} 
              key={item.id}
            >
              <div className="card1-img">
                <img src={item.thumbnail} alt="" />
              </div>

              <h3>{item.title}</h3>

              <div className="price1">
                <h4>${item.price}</h4>
              </div>

              <button
                className="pp"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <button className="view1">View All</button>
      </div>

      {/* DRESS STYLE */}
      <div className="dress">
        <div className="dressbox fade-up">
          <h1 className='title'>BROWSE BY DRESS STYLE</h1>

          <div className="boxes">
            <div className="casual"><img src={casual} alt="" /></div>
            <div className="casual"><img src={formal} alt="" /></div>
          </div>

          <div className="boxes1">
            <div className="casual"><img src={party} alt="" /></div>
            <div className="casual"><img src={gym} alt="" /></div>
          </div>
        </div>
      </div>

      {/* CUSTOMER */}
      <div className="customer fade-up">
        <h1>OUR HAPPY CUSTOMER</h1>

        <div className="buttons">
          <button><LiaArrowLeftSolid /></button>
          <button><LiaArrowRightSolid /></button>
        </div>
      </div>
    </>
  )
}