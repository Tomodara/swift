import React, { useState } from 'react'
import Sidebar from '../components/side_bar'
import Topbar from '../components/topbar'
import banner3 from "/img/home-banner3.jpg"

export default function Profile() {
    const [role, setRole] = useState("Vendor")

    const toggle = () => {
        const topbar = document.querySelector(".topbar")
        const sidebar = document.querySelector(".sidebar")
        const main_content = document.querySelector(".main_content")
        topbar.classList.toggle("active")
        main_content.classList.toggle("active")
        sidebar.classList.toggle("active")
    }

    const alert = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "info",
            title: "Coming soon!!"
          });
    }

    return (
        <div className='vendor_dashboard'>
            <Sidebar role={role}/>

            <div className="main_content">
                <Topbar toggle={toggle}/>

                <div className="special profile d-flex">
                    <div className="img">
                        <div className="image">
                            <img src={banner3} alt="" />
                            <label htmlFor='file' className="cam btn"><i class="fa-solid fa-camera-retro"></i></label>
                            <input type="file" className='d-none' name="file" id="file" />
                        </div>
                        <p className="fw-bold mt-2 mb-1">Ganiu Jamiu</p>
                        <p className="mb-2 text-muted">{role}</p>
                        <button className='btn' onClick={alert}>Save changes</button>
                    </div>

                    <div className="input">
                        <div className="">
                            <label htmlFor=""><i class="fa-solid fa-user"></i> Full Name</label>
                            <input type="text" placeholder='Enter your fullname' />
                        </div>
                        <div className="">
                            <label htmlFor=""><i class="fa-solid fa-envelope"></i> Email Address</label>
                            <input type="text" placeholder='Enter your email address' />
                        </div>
                        <div className="">
                            <label htmlFor=""><i class="fa-solid fa-business-time"></i> Business Name</label>
                            <input type="text" placeholder='Enter your business name' />
                        </div>
                        <div className="">
                            <label htmlFor=""><i class="fa-solid fa-lock"></i> Change password</label>
                            <input type="password"  placeholder='*********' />
                        </div>
                        <div className="">
                            <label htmlFor=""><i class="fa-solid fa-lock"></i> Confirm Change password</label>
                            <input type="password"  placeholder='*********' />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
