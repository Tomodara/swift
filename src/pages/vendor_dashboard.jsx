import React, { useState } from 'react'
import "/public/css/vendor_dashboard.css"
import banner3 from "/img/home-banner3.jpg"
import Sidebar from '../components/side_bar'
import Topbar from '../components/topbar'

export default function VendorDashboard() {
  const [role, setRole] = useState("Vendor")

  const toggle = () => {
    const topbar = document.querySelector(".topbar")
    const sidebar = document.querySelector(".sidebar")
    const main_content = document.querySelector(".main_content")
    topbar.classList.toggle("active")
    main_content.classList.toggle("active")
    sidebar.classList.toggle("active")
  }

  return (
    <div className='vendor_dashboard d-flex'>
      <Sidebar role={role}/>

      <div className="main_content">
       <Topbar toggle={toggle} role={role}/>

        <div className="section1 special">
          <h4 className='mb-3'>Dashboard</h4>
            <div className="d-flex overall">
                <div className="left">
                    <div className="content">
                      <div className="top">
                        <h6 className='p-4'>Welcome back, Jamiu</h6>
                      </div>
                      <div className="p-3">
                        <img src={banner3} alt="" />
                        <p className="float-right"><i class="fa-solid fa-check"></i></p>
                        <p className="mb-2 text-capitalize"><i class="fa-regular fa-user"></i> Ganiu Jamiu</p>
                        <p className="d-block mb-0"><i class="fa-brands fa-critical-role"></i> Vendor</p>
                        <p className="mb-0 mt-2"><i class="fa-solid fa-venus-double"></i> Male</p>
                        <button>View Profile</button>
                      </div>
                    </div>
                    <div className="content content2 p-3">
                      <h6 className='mb-4 fw-bold text-dark'>Monthly Earning</h6>
                      <p className="text-muted">This month</p>
                      <h4 className="mb-4">₦34,252</h4>
                      <p className="text-muted">From previous period</p>
                      <button>View more</button>
                    </div>
                </div>

                <div className="right">
                    <div className="d-flex">
                      <div className="box">
                          <p className="">Active Orders</p>
                          <p className="icon"><i class="fa-brands fa-first-order-alt"></i></p>
                          <h4 className="">1,235</h4>
                      </div>
                      <div className="box">
                          <p className="">Decline Orders</p>
                          <p className="icon"><i class="fa-brands fa-first-order-alt"></i></p>
                          <h4 className="">1,235</h4>
                      </div>
                      <div className="box">
                        <p className="">Total Orders</p>
                          <p className="icon"><i class="fa-brands fa-first-order-alt"></i></p>
                        <h4 className="">1,235</h4>
                      </div>
                      <div className="box">
                        <p className="">Revenue</p>
                        <p className="icon"><i class="fa-brands fa-first-order-alt"></i></p>
                        <h4 className="">₦4000</h4>
                      </div>
                    </div>
                    <div className="chart">
                      
                    </div>
                </div>
            </div>
        </div>

        <div className="section2 d-flex">
          <div className="box top_product">
              <i class="fa-brands fa-product-hunt"></i>
              <h6 className='fw-bold mb-2'>Top Selling product</h6>
              <h6 className="text-center mt-4 text-muted">Shoes</h6>
              <h4 className="text-center fw-bold mny">₦600</h4>
              <p className="text-center mb-4">From previous period</p>

              <div className="d-flex">
                <div className="">
                  <h6 className="text-muted mb-1">Shoes</h6>
                  <p className="mb-0">Foot wear</p>
                </div>
                <div className="">
                  <p className="mb-0 text-muted">Sales</p>
                  <p className="mb-0 text-dark mny">98%</p>
                </div>
              </div>

              <div className="d-flex">
                <div className="">
                  <h6 className="text-muted mb-1">Shoes</h6>
                  <p className="mb-0">Foot wear</p>
                </div>
                <div className="">
                  <p className="mb-0 text-muted">Sales</p>
                  <p className="mb-0 text-dark mny">98%</p>
                </div>
              </div>

              <div className="d-flex">
                <div className="">
                  <h6 className="text-muted mb-1">Shoes</h6>
                  <p className="mb-0">Foot wear</p>
                </div>
                <div className="">
                  <p className="mb-0 text-muted">Sales</p>
                  <p className="mb-0 text-dark mny">98%</p>
                </div>
              </div>
          </div>
          
          <div className="box table_set">
            <i class="fa-brands fa-first-order-alt"></i>
            <h6 className="fw-bold mb-2">Latest Transaction</h6>
            <table class="table mt-4">
              <thead>
                <tr>
                  <th>#ID</th>
                  <th>Total</th>
                  <th>Payment Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#ks540</td>
                  <td>₦400</td>
                  <td className='status mny'>Paid</td>
                </tr>
                <tr>
                  <td>#ks540</td>
                  <td>₦400</td>
                  <td className='status mny'>Paid</td>
                </tr>
                <tr>
                  <td>#ks540</td>
                  <td>₦400</td>
                  <td className='status mny'>Paid</td>
                </tr>
                <tr>
                  <td>#ks540</td>
                  <td>₦400</td>
                  <td className='status mny'>Paid</td>
                </tr>
                <tr>
                  <td>#ks540</td>
                  <td>₦400</td>
                  <td className='status mny'>Paid</td>
                </tr>
                <tr>
                  <td>#ks540</td>
                  <td>₦400</td>
                  <td className='status mny'>Paid</td>
                </tr>
                <tr>
                  <td>#ks540</td>
                  <td>₦400</td>
                  <td className='status mny'>Paid</td>
                </tr>
                
              </tbody>
            </table>
          </div>
          
          <div className="box notification">
            <i class="fa-solid fa-bell"></i>
            <h6 className="fw-bold mb-2">Notifications</h6>
            <h4 className="">No Notifications!!</h4>
            <p className="">You do not have any notifications.</p>
          </div>
        </div>

        <div className="section3">
          <p className="text-center text-white">© Copyright 2016, All rights reserved</p>
        </div>

      </div>
    </div>
  )
}
