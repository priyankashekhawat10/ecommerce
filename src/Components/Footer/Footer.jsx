import React from 'react'
import './Footer.css'
import { BiLogoTwitter } from "react-icons/bi";

import { MdFacebook } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import visa from "../../assets/visa.png"
import visa1 from "../../assets/visa1.png"
import visa3 from "../../assets/visa3.png"
import visa4 from "../../assets/visa4.png"
import visa5 from "../../assets/visa5.png"
import { CiHeadphones } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";





function Footer() {
  return (
    <>
      <div className='footer'>
        <div className="box">
          <h1 className='shop'>
            SHOP.CO
          </h1>
          <p className='content'>
            We have clothes that suits your style and <br />
            which you’re proud to wear. From <br />
            women to men.
          </p>
          <div className="logo">
            <div className="logo1">
              <button><BiLogoTwitter />
              </button>
              <button>
                <MdFacebook />
              </button>
              <button>
                <RiInstagramFill />


              </button>
              <button>
                <CiHeadphones />

              </button>

            </div>
          </div>
        </div>
        <div className="box">
          <h2 className='company'>COMPANY</h2>
          <ul className='list' >
            <li>About</li>
            <li>Features</li>
            <li>Work</li>
            <li>carer</li>
          </ul>

        </div>
        <div className="box">
          <h2 className='company'>HELP</h2>
          <ul className='list' >
            <li>Custom Support</li>
            <li>Delivery Details</li>
            <li>Term & Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="box">
          <h2 className='company'>FAQ</h2>
          <ul className='list' >
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payment</li>
          </ul>

        </div>

        <div className="box">
          <h2 className='company'>RESOURCES</h2>
          <ul className='list' >
            <li>Free eBooks</li>
            <li>Manage Development Tutorial</li>
            <li>How to-Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>

        <div className="offers">
          <div className="letter-heading">
            <h1 className='letter'> STAY UPTO DATE ABOUT <br />
              OUR LATEST OFFERS</h1>
          </div>
          <div className="letter">
            <  MdOutlineMailOutline className='mail-icon' />

            <input type="text" placeholder='Enter ypur email address' />
            <input type="text" placeholder='Subscribes to Newsletter' />


          </div>


        </div>
        
      </div>

      <div className="last">
        <div className="right">  <p className='footer-copyright'>
          Shop.co © 2000-2023, All Rights Reserved
        </p></div>
        <div className="visa">
          <img src={visa} alt="" />
          <img src={visa1} alt="" />
          <img src={visa3} alt="" />
          <img src={visa4} alt="" />
          <img src={visa5} alt="" />


        </div>
      </div>


    </>
  )
}

export default Footer
