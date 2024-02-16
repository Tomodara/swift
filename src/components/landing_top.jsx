import React from 'react'
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

export default function Landing_top() {
  return (
    <div>
         <div className="section1">
          <div className="topbar d-flex">
              <div className="d-flex">
                <h2 className='text-uppercase text-dark'><a href="/">swift</a></h2>
                {/* <img className='logo mx-2' src={logo} alt="" /> */}
              </div>
              <p data-bs-toggle="offcanvas" data-bs-target="#demo" className="mb-0 btn d-none open_menu"><i class="fa-solid fa-bars"></i></p>

              <div class="offcanvas offcanvas-start" id="demo">
                <div class="offcanvas-header">
                  <h2 class="offcanvas-title">Swift</h2>
                  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                </div>
                <div class="offcanvas-body">
                  <p className="mb-0 mt-4"><a href="/"><i class="fa-solid fa-house"></i> Home</a></p>
                  <p className="mb-0"><a href="/product-listing"><i class="fa-brands fa-product-hunt"></i> Products</a></p>
                  <p className="mb-0"><a href="/about-us"><i class="fa-regular fa-address-card"></i> About Us</a></p>
                  <p className="mb-0"><a href="/login"><i class="fa-solid fa-arrow-right"></i> Log In</a></p>
                  <p className="mb-0"><a href="/register"><i class="fa-solid fa-arrow-right"></i> Sign Up</a></p>
                  <p className="mb-0"><a href="/dashboard"><i class="fa-brands fa-red-river"></i> Dashboard</a></p>
                  {/* <button class="btn btn-secondary" type="button">A Button</button> */}
                </div>
              </div>

              <div className="d-flex links">
                <p className="mb-0"><a href="/">Home</a></p>
                <p className="mb-0"><a href="/login">Log In</a></p>
                <p className="mb-0"><a href="/register">Sign Up</a></p>
                <p className="mb-0"><a href="/product-listing">Products</a></p>
                <p className="mb-0"><a href="/about-us">About Us</a></p>
                <p className="mb-0"><a href="/dashboard">Dashboard</a></p>
                {/* <p className="mb-0"><a href="/agent-dashboard">Agent Dashboard</a></p>
                <p className="mb-0"><a href="/user-dashboard">User Dashboard</a></p> */}
              </div>
          </div>
        </div>

        <div className="carousel slide carousel-fade img"  id="demo"  data-bs-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={banner1} alt="Los Angeles" className="d-block"/>
                <div className="carousel-caption text-start">
                <h3>Reliable Service Every Time</h3>
                <p>GET THE FASTEST PRODUCT DELIVERY</p>
                <span className='d-block'>Try Us And See How Good Our Services Are.</span>
                <a href="/login" className="btn">Get Started</a>
                </div>
            </div>
            </div>
            
            <div className="carousel-item">
            <img src={banner2} alt="Los Angeles" className="d-block"/>
            <div className="carousel-caption text-start">
                <h3>Choose Your Favorite</h3>
                <p className='text-uppercase'>Stay At Home We Will Deliver Your Order</p>
                <span className='d-block'>Do You Want A Fast Service? Just Call Us..</span>
                <a href="/login" className="btn">Get Started</a>
            </div>
            </div>
        
        
            <div className="carousel-item">
            <img src={banner3} alt="Los Angeles" className="d-block"/>
            <div className="carousel-caption text-start">
                <h3>Eat And Enjoy</h3>
                <p className='text-uppercase'>Order free food delivery every day at your convenience</p>
                <span className='d-block'>No shoping, no cooking, no counting and no cleaning. Enjoy your healthy meals with your family.</span>
                <a href="/login" className="btn">Get Started</a>
            </div>
            </div>
            
        </div>
    </div>
  )
}
