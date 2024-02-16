import React, { useState } from 'react'
import Sidebar from '../components/side_bar'
import Topbar from '../components/topbar'
import "/public/css/product.css"
import banner3 from "/img/home-banner3.jpg"
import phone from "/img/phone1.jpeg"
import packages from "/img/Packages.jpg"

export default function Products() {
    const [role, setRole] = useState("Vendor")
    const [show, setShow] = useState(false)

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

    const deleteProduct = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#2a3042",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success"
              });
            }
        });
    }

    const showForm = () => {
        var form = document.querySelector(".form")
        var add = document.querySelector(".add")
        form.style.display = "inline"
        add.style.display = "none"
    }

    const closeForm = () => {
        var form = document.querySelector(".form")
        var add = document.querySelector(".add")
        form.style.display = "none"
        add.style.display = "inline"
    }

    return (
        <div className='vendor_dashboard'>
            <Sidebar role={role}/>

            <div className="main_content">
                <Topbar toggle={toggle}/>
                

                <div className="products special d-flex">
                    <div className="pagination">
                        <p className="mb-0 btn"><i className='fa-solid fa-angles-left'></i></p>
                        <p className="mb-0 btn total">1 out of 1 page</p>
                        <p className="mb-0 btn"><i className='fa-solid fa-angles-right'></i></p>
                    </div>
                    <div className="box add text-center">
                       <p className="text-muted btn" onClick={showForm}><i class="fa-solid fa-plus"></i></p>
                       <p className="p">Add Product</p>
                    </div>

                    <div className="box form">
                        <input type="text" className='mt-3'  placeholder='Product Name'/>
                        <input type="text"  placeholder='Price'/>
                        <input type="text"  placeholder='Description'/>
                        <label htmlFor="file">Choose product image <i class="fa-solid fa-camera"></i></label>
                        <input type="file" className='d-none' name="file" id="file" />
                        <button className='btn' onClick={alert}>Add Product</button>
                        <p className="text-muted arrow btn" onClick={closeForm}><i class="fa-solid fa-arrow-left"></i></p>
                    </div>

                    <div className="box">
                        <img src={phone} alt="" />
                        <div className="text p-3">
                            <p className="fw-bold mb-0">Iphone 29 pro</p>
                            <p className="text-muted info">brand new iphone 29 pro with....</p>
                            <p className="text-danger btn" onClick={deleteProduct}><i class="fa-solid fa-trash"></i></p>
                            <h4 className='fw-bold mny'>₦200,000</h4>
                        </div>
                    </div>
                    <div className="box">
                        <img src={packages} alt="" />
                        <div className="text p-3">
                            <p className="fw-bold mb-0">Iphone 29 pro</p>
                            <p className="text-muted info">brand new iphone 29 pro with....</p>
                            <p className="text-danger btn" onClick={deleteProduct}><i class="fa-solid fa-trash"></i></p>
                            <h4 className='fw-bold mny'>₦200,000</h4>
                        </div>
                    </div>
                    <div className="box">
                        <img src={phone} alt="" />
                        <div className="text p-3">
                            <p className="fw-bold mb-0">Iphone 29 pro</p>
                            <p className="text-muted info">brand new iphone 29 pro with....</p>
                            <p className="text-danger btn" onClick={deleteProduct}><i class="fa-solid fa-trash"></i></p>
                            <h4 className='fw-bold mny'>₦200,000</h4>
                        </div>
                    </div>
                    <div className="box">
                        <img src={phone} alt="" />
                        <div className="text p-3">
                            <p className="fw-bold mb-0">Iphone 29 pro</p>
                            <p className="text-muted info">brand new iphone 29 pro with....</p>
                            <p className="text-danger btn" onClick={deleteProduct}><i class="fa-solid fa-trash"></i></p>
                            <h4 className='fw-bold mny'>₦200,000</h4>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
