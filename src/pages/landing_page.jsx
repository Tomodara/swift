import React from 'react'
import "/public/css/landing.css"
import banner1 from "/img/home-banner1.jpg"
import banner2 from "/img/home-banner2.jpg"
import banner3 from "/img/home-banner3.jpg"
import fashion1 from "/img/fashion.webp"
import fashion2 from "/img/fashion1.webp"
import Foot1 from "/img/Foot Wears1.webp"
import Foot2 from "/img/Foot Wears2.jpg"
import Packages from "/img/Packages.jpg"
import phone1 from "/img/phone1.jpeg"
import Groceries2 from "/img/Groceries2.jpeg"
import img1 from "/img/img1.png"
import agent from "/img/agent.png"
import delivery_man from "/img/delivery_man.png"
import Footer from '../components/footer'
import Landing_top from '../components/landing_top'

export default function LandingPage() {
  return (
    <div className='landing'>
     <Landing_top/>

      <div className="section2 mt-5">
        <p className="text-center top mb-1">Place Your Order Now.</p>
        <h2 className='text-center'>We Deliver Everything</h2>

        <div className="d-flex flex-wrap">
            <div className="content">
              <img src={img1} alt="" />
              <div className="p-4">
                <h5 className="mb-0">Food And Drinks</h5>
                <p className="mb-2 text-muted text-start fw-bold">Harmony Retails & Co.</p>
                <p className="mb-0 text-start">Harmony sells all the kinds of healthy food you wish for, Howdy Special, crispy fried chicken fillet slathered...</p>
              </div>
            </div>

            <div className="content">
              <img src={Foot2} alt="" />
              <div className="p-4">
                <h5 className="mb-0">Foot Wears</h5>
                <p className="mb-2 text-muted text-start fw-bold">Skoute & Emma Wear</p>
                <p className="mb-0 text-start">We sell different types of foot wear, eg Canvas, foot Palm, trainners and various nike shoes, for male and female..... </p>
              </div>
            </div>

            <div className="content">
              <img src={phone1} alt="" />
              <div className="p-4">
                <h5 className="">Phones & Phone Gadget</h5>
                <p className="mb-2 text-muted text-start fw-bold">Engr. Toyeeb </p>
                <p className="mb-0 text-start">Best in dealing with brand new and used Phone, we have it in different models, Iphone, Android and also Laptop...</p>
              </div>
            </div>
           
            <div className="content">
              <img src={Packages} alt="" />
              <div className="p-4">
                <h5 className="mb-0">Packages</h5>
                <p className="mb-2 text-muted text-start fw-bold">Sweden Mornach Store</p>
                <p className="mb-0 text-start">Tell us and we will package it for you, Our store offers a simple solution for your packages... </p>
              </div>
            </div>

            <div className="content">
              <img src={fashion2} alt="" />
              <div className="p-4">
                <h5 className="mb-0">Fashion</h5>
                <p className="mb-2 text-muted text-start fw-bold">Diamond Place Clothing</p>
                <p className="mb-0 text-start">We sell both male and female cloth and trouser, huddies, joggers, baggy jean, jacket jean...</p>
              </div>
            </div>
           

            <div className="content">
              <img src={Groceries2} alt="" />
              <div className="p-4">
                <h5 className="mb-0">Groceries</h5>
                <p className="mb-2 text-muted text-start fw-bold">God Power Cheap Groceries</p>
                <p className="mb-0 text-start">Blackened chicken, sauteed onions and peppers smothered with pepper jack...</p>
              </div>
            </div>
        </div>
      </div>

      <div className="section3 flex-wrap d-flex">
        <div className="text mb-3">
          <h2 className='mb-5'>Get Started Today!</h2>
          <h4 className="mb-3">Stay At Home We Will Deliver Your Order</h4>
          <p className="">From 8 to 10 in the morning. Delivery is free. Outside the city Shipping costs ₦2,000. Delivery days are Monday, Tuesday, Wednesday, Thursday, Friday, Saturday.</p>
          <a href="/product-listing" className="btn">View Products</a>
        </div>
        <div className="">
          <img src={agent} alt="" />
        </div>
      </div>

      <div className="section3 section4 mt-4 flex-wrap d-flex">
        <div className="">
          <img src={delivery_man} alt="" />
        </div>
        <div className="text mb-3">
          <h2 className='mb-3'>Become a Delivery Agent!</h2>
          <h4 className="mb-3">Deliver and Earn</h4>
          <p className="">Become a delivery agent and start earning on every successful delivery, We offer flexible and convenient part time work as delivery agent.</p>
          <a href="/login" className="btn">Get Started</a>
        </div>
      </div>

      <Footer/>
    </div>
  )
}
