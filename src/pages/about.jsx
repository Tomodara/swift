/*import React from 'react'

export default function About() {
  return (
    <div>About</div>
  )C:\Users\DARA\Downloads\swift\src\pages\about.jsx
}
*/
import React from 'react';
import "/public/css/about.css"
export default function About() {
  return (
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
  );
}