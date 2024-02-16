import React, { useState } from 'react'
import Sidebar from '../components/side_bar'
import Topbar from '../components/topbar'

export default function allOrders() {
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
        <div className='vendor_dashboard'>
            <Sidebar role={role}/>

            <div className="main_content">
                <Topbar toggle={toggle}/>

                <div className="special orders">
                    <div className="top nav-tabs d-flex" role="tablist">
                        <p data-bs-toggle="tab" className="mb-0 nav-link active">Active Orders (0)</p>
                        <p data-bs-toggle="tab" className="mb-0 nav-link ">Fulfilled Orders (0)</p>
                        <p data-bs-toggle="tab" className="mb-0 nav-link ">Closed Orders (0)</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
