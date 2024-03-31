import React from 'react';
import Landing_top from '../components/landing_top'
import Footer from '../components/footer'
import "/public/css/about.css"

export default function About() {
  return (
    <div className='landing'>
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
      <section className="about">
        <div className="main">
          <img src="public\img\agent.png" alt="Swift Agent" />
          <div className="all-text">
            <h1>Welcome to Swift - Where Every Delivery is a Connection!</h1>
            <p>
              At Swift, we are not just delivering goods, we are delivering a revolution in campus convenience and community empowerment. We are committed to reshaping the way students experience campus living.
            </p>
            <p>
              Founded in 2023, Swift is a rapidly growing startup that is dedicated to providing fast, reliable, and convenient delivery services for students and faculty members. Our team of experienced delivery professionals and cutting-edge technology enable us to offer a seamless and hassle-free delivery experience.
            </p>
            <p>
              Our mission is to create a sustainable and eco-friendly delivery ecosystem that benefits both the campus community and the environment. We are committed to reducing our carbon footprint by using electric vehicles, recyclable packaging, and other green initiatives.
            </p>
            <div className="btn">
              <button type="button" className="btn2">Learn more</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}