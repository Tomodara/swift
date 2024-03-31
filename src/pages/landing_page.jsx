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
                <p className="mb-2 text-muted text-start fw-bold">Yomi's Delight.</p>
                <p className="mb-0 text-start">Yomi's Delight offers a variety of junk foods such as Shawarma and hamburgers, alongside nutritious smoothies and locally sourced beverages.</p>
              </div>
            </div>

            <div className="content">
              <img src={Foot2} alt="" />
              <div className="p-4">
                <h5 className="mb-0">GoldenBrand Collections</h5>
                <p className="mb-2 text-muted text-start fw-bold">Foot Wears</p>
                <p className="mb-0 text-start">We offer a diverse range of footwear, including canvas shoes, sandals, sneakers, and a variety of Nike options, catering to both men and women.</p>
              </div>
            </div>

            <div className="content">
              <img src={phone1} alt="" />
              <div className="p-4">
                <h5 className="">Apple Store</h5>
                <p className="mb-2 text-muted text-start fw-bold">Iphone Accessories</p>
                <p className="mb-0 text-start">Renowned for our expertise in handling brand new and pre-owned Apple accessories, we proudly offer a diverse array of products ranging from iPhones to MacBooks.</p>
              </div>
            </div>
           
            <div className="content">
              <img src={Packages} alt="" />
              <div className="p-4">
                <h5 className="mb-0">TBH</h5>
                <p className="mb-2 text-muted text-start fw-bold">Packages</p>
                <p className="mb-0 text-start">Inform us of your needs, and we'll take care of the packaging for you. Our store provides a straightforward solution for all your packaging requirements. </p>
              </div>
            </div>

            <div className="content">
              <img src={fashion2} alt="" />
              <div className="p-4">
                <h5 className="mb-0">Fashion</h5>
                <p className="mb-2 text-muted text-start fw-bold">Fashion Nova</p>
                <p className="mb-0 text-start">We offer a wide selection of clothing items for both men and women, including trousers, hoodies, joggers, baggy jeans, and denim jackets.</p>
              </div>
            </div>
           

            <div className="content">
              <img src={Groceries2} alt="" />
              <div className="p-4">
                <h5 className="mb-0">Groceries</h5>
                <p className="mb-2 text-muted text-start fw-bold">Cheap Groceries</p>
                <p className="mb-0 text-start">Elevate your grocery shopping with ingredients like onions, peppers, and vegetables, cabages to enhance your dishes.</p>
              </div>
            </div>
        </div>
      </div>

      <div className="section3 flex-wrap d-flex">
        <div className="text mb-3">
          <h2 className='mb-5'>Get Started Today!</h2>
          <h4 className="mb-3">Stay At Home We Will Deliver Your Order</h4>
          <p className="">Experience hassle-free morning deliveries, absolutely free within the university campus! Get your essentials delivered Monday through Saturday, from 8 to 10 AM.</p>
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
