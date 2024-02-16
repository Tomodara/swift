import { useState } from 'react'
import LandingPage from '../pages/landing_page'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/login'
import Register from '../pages/register'
import Contact from '../pages/contact'
import About from '../pages/about'
import VendorDashboard from '../pages/vendor_dashboard'
import UserDashboard from '../pages/user_dashboard'
import AgentDashboard from '../pages/agent_dashboard'
import Chat from '../pages/chat'
import Products from '../pages/products'
import AllOrders from '../pages/all_order'
import Analytics from '../pages/analytic'
import Profile from '../pages/profile'
import ProductListing from '../pages/product _listing'
import Single from '../pages/single'

function App() {
  return (
    <>
       <Routes>
          <Route element={<LandingPage/>} path='/'/>
          <Route element={<Login/>} path='/login'/>
          <Route element={<Register/>} path='/register'/>
          <Route element={<VendorDashboard/>} path='/dashboard'/>
          <Route element={<Contact/>} path='/contact-us'/>
          <Route element={<About/>} path='/about-us'/>
          <Route element={<Chat/>} path='/chat'/>
          <Route element={<Products/>} path='/products'/>
          <Route element={<Analytics/>} path='/analytic'/>
          <Route element={<Profile/>} path='/profile'/>
          <Route element={<AllOrders/>} path='/orders'/>
          <Route element={<Single/>} path='/products/:id'/>
          <Route element={<ProductListing/>} path='/product-listing'/>
        </Routes>
    </>
  )
}

export default App
