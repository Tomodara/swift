import React, { useEffect } from 'react'
import "/public/css/login.css"
import agent from "/img/agent.png"
import banner1 from "/img/home-banner1.jpg"

export default function Login() {
  
  useEffect(() => {
    var focus = document.querySelectorAll(".focus")
    var move_up = document.querySelectorAll(".move_up")
    focus.forEach((val, index) => {
      focus[index].addEventListener("focusin",() => {
        move_up[index].classList.add("active")
        focus[index].classList.add("active")
      })

      focus[index].addEventListener("focusout",() => {
        move_up[index].classList.remove("active")
        focus[index].classList.remove("active")
      })
    })
  })

  return (
    <div className='login d-flex'>
      <div className="img">
        <img src={agent} alt="" />
      </div>

      <div className="form pb-5">
        <a href="/" className='text-dark'><h2 className="text-center mt-5 fw-bold">Swift</h2></a>
        <h4 className="text-center text-muted fw-bold">Login to Continue</h4>
        <p className="mb-0 text-center mt-3 alt">Don't have an account? <a href="/register" className='mx-2'>Sign up</a></p>

        <div className="inputs mt-5">
           <div className="text">
              <input className='focus' type="text" />
              <p className='move_up'>Email</p>
           </div>
           <div className="text">
              <input className='focus' type="text" />
              <p className='move_up'>Password</p>
           </div>
           <div className="text-center">
              <a href="">Forgot Password?</a>
              <button className='btn'>Login</button>
           </div>
           
            <p className="text-center mt-4">Or sign up using </p>
            <div className="social d-flex text-center">
              <p className="mb-0"><i class="fa-brands fa-google text-danger"></i></p>
              <p className="mb-0 mx-4"><i class="fa-brands fa-facebook text-primary"></i></p>
            </div>
        </div>
      </div>
    </div>
  )
}
