import React from 'react'
import "/public/css/landing.css"
import Landing_top from '../components/landing_top'
import Footer from '../components/footer'
import banner3 from "/img/home-banner3.jpg"
import banner1 from "/img/home-banner1.jpg"
import banner2 from "/img/home-banner2.jpg"
import phone from "/img/phone1.jpeg"
import packages from "/img/Packages.jpg"

export default function ProductListing() {
  return (
    <div className='landing product_listing'>
       <Landing_top/>

       <div className="ads">
            <div id="slide" class="carousel slide" data-bs-ride="carousel">

            <div class="carousel-indicators">
                <button type="button" className='bg-success active' data-bs-target="#slide" data-bs-slide-to="0"></button>
                <button type="button" className='bg-success' data-bs-target="#slide" data-bs-slide-to="1"></button>
                <button type="button" className='bg-success' data-bs-target="#slide" data-bs-slide-to="2"></button>
            </div>


            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={banner1} alt="Los Angeles" class="d-block"/>
            </div>
            <div class="carousel-item">
                <img src={banner2} alt="Chicago" class="d-block"/>
            </div>
            <div class="carousel-item">
                <img src={banner3} alt="New York" class="d-block"/>
            </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#slide" data-bs-slide="prev">
            <span class="ctrl bg-success"><i class="fa-solid fa-arrow-left"></i></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#slide" data-bs-slide="next">
            <span class="ctrl bg-success"><i class="fa-solid fa-arrow-right"></i></span>
            </button>
            </div>
       </div>

        <div className="text-center search">
            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-magnifying-glass text-muted"></i></span>
                <input type="text" class="" placeholder="search products, vendors......"/>
            </div>
            <button className='btn'>Search products</button>
        </div>
       <div className="main flex-wrap d-flex">
            <div className="box">
                <div className="overflow-hidden">
                    <img src={banner3} alt="" />
                </div>
                <div className="p-3">
                    <p className="fw-bold mb-0">Iphone 29 pro</p>
                    <p className="desc">brand new iphone 29 pro with charger and lasting battery</p>
                    <h4 className="mny mb-0 fw-bold">₦200,000</h4>
                    <p className="mb-2 discount">₦210,000</p>
                    <a href='/products/product_id' className="icon btn mb-3 mt-2">view <i class="fa-solid fa-arrow-right"></i></a>
                    <p className="listed"><i class="fa-solid fa-check"></i> Listed by Diamond Store & Retail.</p>
                </div>
            </div>
            <div className="box">
                <div className="overflow-hidden">
                    <img src={packages} alt="" />
                </div>
                <div className="p-3">
                    <p className="fw-bold mb-0">Iphone 29 pro</p>
                    <p className="desc">brand new iphone 29 pro with charger and lasting battery</p>
                    <h4 className="mny mb-0 fw-bold">₦200,000</h4>
                    <p className="mb-2 discount">₦210,000</p>
                    <a href='/products/product_id' className="icon btn mb-3 mt-2">view <i class="fa-solid fa-arrow-right"></i></a>
                    <p className="listed"><i class="fa-solid fa-check"></i> Listed by Diamond Store & Retail.</p>
                </div>
            </div>
            <div className="box">
                <div className="overflow-hidden">
                    <img src={phone} alt="" />
                </div>
                <div className="p-3">
                    <p className="fw-bold mb-0">Iphone 29 pro</p>
                    <p className="desc">brand new iphone 29 pro with charger and lasting battery</p>
                    <h4 className="mny mb-0 fw-bold">₦200,000</h4>
                    <p className="mb-2 discount">₦210,000</p>
                    <a href='/products/product_id' className="icon btn mb-3 mt-2">view <i class="fa-solid fa-arrow-right"></i></a>
                    <p className="listed"><i class="fa-solid fa-check"></i> Listed by Diamond Store & Retail.</p>
                </div>
            </div>
            <div className="box">
                <div className="overflow-hidden">
                    <img src={banner3} alt="" />
                </div>
                <div className="p-3">
                    <p className="fw-bold mb-0">Iphone 29 pro</p>
                    <p className="desc">brand new iphone 29 pro with charger and lasting battery</p>
                    <h4 className="mny mb-0 fw-bold">₦200,000</h4>
                    <p className="mb-2 discount">₦210,000</p>
                    <a href='/products/product_id' className="icon btn mb-3 mt-2">view <i class="fa-solid fa-arrow-right"></i></a>
                    <p className="listed"><i class="fa-solid fa-check"></i> Listed by Diamond Store & Retail.</p>
                </div>
            </div>
            <div className="box">
                <div className="overflow-hidden">
                    <img src={packages} alt="" />
                </div>
                <div className="p-3">
                    <p className="fw-bold mb-0">Iphone 29 pro</p>
                    <p className="desc">brand new iphone 29 pro with charger and lasting battery</p>
                    <h4 className="mny mb-0 fw-bold">₦200,000</h4>
                    <p className="mb-2 discount">₦210,000</p>
                    <a href='/products/product_id' className="icon btn mb-3 mt-2">view <i class="fa-solid fa-arrow-right"></i></a>
                    <p className="listed"><i class="fa-solid fa-check"></i> Listed by Diamond Store & Retail.</p>
                </div>
            </div>
            <div className="box">
                <div className="overflow-hidden">
                    <img src={phone} alt="" />
                </div>
                <div className="p-3">
                    <p className="fw-bold mb-0">Iphone 29 pro</p>
                    <p className="desc">brand new iphone 29 pro with charger and lasting battery</p>
                    <h4 className="mny mb-0 fw-bold">₦200,000</h4>
                    <p className="mb-2 discount">₦210,000</p>
                    <a href='/products/product_id' className="icon btn mb-3 mt-2">view <i class="fa-solid fa-arrow-right"></i></a>
                    <p className="listed"><i class="fa-solid fa-check"></i> Listed by Diamond Store & Retail.</p>
                </div>
            </div>
            <div className="box">
                <div className="overflow-hidden">
                    <img src={banner3} alt="" />
                </div>
                <div className="p-3">
                    <p className="fw-bold mb-0">Iphone 29 pro</p>
                    <p className="desc">brand new iphone 29 pro with charger and lasting battery</p>
                    <h4 className="mny mb-0 fw-bold">₦200,000</h4>
                    <p className="mb-2 discount">₦210,000</p>
                    <a href='/products/product_id' className="icon btn mb-3 mt-2">view <i class="fa-solid fa-arrow-right"></i></a>
                    <p className="listed"><i class="fa-solid fa-check"></i> Listed by Diamond Store & Retail.</p>
                </div>
            </div>
            <div className="box">
                <div className="overflow-hidden">
                    <img src={packages} alt="" />
                </div>
                <div className="p-3">
                    <p className="fw-bold mb-0">Iphone 29 pro</p>
                    <p className="desc">brand new iphone 29 pro with charger and lasting battery</p>
                    <h4 className="mny mb-0 fw-bold">₦200,000</h4>
                    <p className="mb-2 discount">₦210,000</p>
                    <a href='/products/product_id' className="icon btn mb-3 mt-2">view <i class="fa-solid fa-arrow-right"></i></a>
                    <p className="listed"><i class="fa-solid fa-check"></i> Listed by Diamond Store & Retail.</p>
                </div>
            </div>
            <div className="box">
                <div className="overflow-hidden">
                    <img src={phone} alt="" />
                </div>
                <div className="p-3">
                    <p className="fw-bold mb-0">Iphone 29 pro</p>
                    <p className="desc">brand new iphone 29 pro with charger and lasting battery</p>
                    <h4 className="mny mb-0 fw-bold">₦200,000</h4>
                    <p className="mb-2 discount">₦210,000</p>
                    <a href='/products/product_id' className="icon btn mb-3 mt-2">view <i class="fa-solid fa-arrow-right"></i></a>
                    <p className="listed"><i class="fa-solid fa-check"></i> Listed by Diamond Store & Retail.</p>
                </div>
            </div>
            <div className="box">
                <div className="overflow-hidden">
                    <img src={banner3} alt="" />
                </div>
                <div className="p-3">
                    <p className="fw-bold mb-0">Iphone 29 pro</p>
                    <p className="desc">brand new iphone 29 pro with charger and lasting battery</p>
                    <h4 className="mny mb-0 fw-bold">₦200,000</h4>
                    <p className="mb-2 discount">₦210,000</p>
                    <a href='/products/product_id' className="icon btn mb-3 mt-2">view <i class="fa-solid fa-arrow-right"></i></a>
                    <p className="listed"><i class="fa-solid fa-check"></i> Listed by Diamond Store & Retail.</p>
                </div>
            </div>
            <div className="box">
                <div className="overflow-hidden">
                    <img src={packages} alt="" />
                </div>
                <div className="p-3">
                    <p className="fw-bold mb-0">Iphone 29 pro</p>
                    <p className="desc">brand new iphone 29 pro with charger and lasting battery</p>
                    <h4 className="mny mb-0 fw-bold">₦200,000</h4>
                    <p className="mb-2 discount">₦210,000</p>
                    <a href='/products/product_id' className="icon btn mb-3 mt-2">view <i class="fa-solid fa-arrow-right"></i></a>
                    <p className="listed"><i class="fa-solid fa-check"></i> Listed by Diamond Store & Retail.</p>
                </div>
            </div>
            <div className="box">
                <div className="overflow-hidden">
                    <img src={phone} alt="" />
                </div>
                <div className="p-3">
                    <p className="fw-bold mb-0">Iphone 29 pro</p>
                    <p className="desc">brand new iphone 29 pro with charger and lasting battery</p>
                    <h4 className="mny mb-0 fw-bold">₦200,000</h4>
                    <p className="mb-2 discount">₦210,000</p>
                    <a href='/products/product_id' className="icon btn mb-3 mt-2">view <i class="fa-solid fa-arrow-right"></i></a>
                    <p className="listed"><i class="fa-solid fa-check"></i> Listed by Diamond Store & Retail.</p>
                </div>
            </div>
            <div className="box">
                <div className="overflow-hidden">
                    <img src={banner3} alt="" />
                </div>
                <div className="p-3">
                    <p className="fw-bold mb-0">Iphone 29 pro</p>
                    <p className="desc">brand new iphone 29 pro with charger and lasting battery</p>
                    <h4 className="mny mb-0 fw-bold">₦200,000</h4>
                    <p className="mb-2 discount">₦210,000</p>
                    <a href='/products/product_id' className="icon btn mb-3 mt-2">view <i class="fa-solid fa-arrow-right"></i></a>
                    <p className="listed"><i class="fa-solid fa-check"></i> Listed by Diamond Store & Retail.</p>
                </div>
            </div>
            <div className="box">
                <div className="overflow-hidden">
                    <img src={packages} alt="" />
                </div>
                <div className="p-3">
                    <p className="fw-bold mb-0">Iphone 29 pro</p>
                    <p className="desc">brand new iphone 29 pro with charger and lasting battery</p>
                    <h4 className="mny mb-0 fw-bold">₦200,000</h4>
                    <p className="mb-2 discount">₦210,000</p>
                    <a href='/products/product_id' className="icon btn mb-3 mt-2">view <i class="fa-solid fa-arrow-right"></i></a>
                    <p className="listed"><i class="fa-solid fa-check"></i> Listed by Diamond Store & Retail.</p>
                </div>
            </div>
            <div className="box">
                <div className="overflow-hidden">
                    <img src={phone} alt="" />
                </div>
                <div className="p-3">
                    <p className="fw-bold mb-0">Iphone 29 pro</p>
                    <p className="desc">brand new iphone 29 pro with charger and lasting battery</p>
                    <h4 className="mny mb-0 fw-bold">₦200,000</h4>
                    <p className="mb-2 discount">₦210,000</p>
                    <a href='/products/product_id' className="icon btn mb-3 mt-2">view <i class="fa-solid fa-arrow-right"></i></a>
                    <p className="listed"><i class="fa-solid fa-check"></i> Listed by Diamond Store & Retail.</p>
                </div>
            </div>
       </div>

       <Footer/>
    </div>
  )
}
