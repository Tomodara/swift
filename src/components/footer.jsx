import React from 'react'
import logo from "/img/logo.svg"

export default function Footer() {
  return (
    <div className='footer'>
      <div className="d-flex">
        <div className="content mb-4">
          <div className="text-center header">
            <h2 className='text-uppercase text-dark'><a href="/">swift</a>
            <img className='logo mx-2' src={logo} alt="" /></h2>
          </div>
        </div>

        <div className="content">
          <ul>
            <li><h5 className='text-white'>Our service</h5></li>
            <li><a href="">Terms</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Consultation</a></li>
          </ul>
        </div>
        
        <div className="content">
          <ul>
            <li><h5 className='text-white'>Contact</h5></li>
            <p className="mb-2">
              <strong>Email: dharasimi01@gmail.com</strong>
            </p>
            <p className="mb-2">
              <strong>Phone: </strong>+234 806 737 3972
            </p>
          </ul>
        </div>

        <div className="content">
          <ul>
            <li><h5 className='text-white'>Explore</h5></li>
            <li><a href="">How it works</a></li>
            <li><a href="">Press Page</a></li>
            <li><a href="">Consultation</a></li>
          </ul>
        </div>

        <div className="content">
          <ul>
            <li><h5 className='text-white'>Latest News</h5></li>
            <li><a href="">Free delivery from 8 to 10 Am in the university</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
