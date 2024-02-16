import React, { useState } from 'react'
import Sidebar from '../components/side_bar'
import Topbar from '../components/topbar'

export default function Analytics() {
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

                <div className="special analytic">
                    <div className="box">
                        <div className="d-flex">
                            <p className="mb-0"><i class="fa-brands fa-product-hunt"></i> Product</p>
                            <p className="mb-0"><i class="fa-solid fa-hand-holding-dollar"></i> Price</p>
                            <p className="mb-0"><i class="fa-solid fa-calendar-days"></i> 2024</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="d-flex">
                            <p className="mb-0"><i class="fa-brands fa-product-hunt"></i> Product</p>
                            <p className="mb-0"><i class="fa-solid fa-clipboard"></i> Quantity</p>
                            <p className="mb-0"><i class="fa-solid fa-calendar-days"></i> 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
