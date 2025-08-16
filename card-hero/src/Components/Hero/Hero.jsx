import React from 'react'
import img1 from '../../assets/sample1.jpg'
import img2 from '../../assets/sample2.jpg'
import img3 from '../../assets/sample3.jpg'
import img4 from '../../assets/sample4.jpg'
import img5 from '../../assets/sample5.jpg'
import './Hero.css'

const Hero = () => {
  return (
    <div>
      <div className="hero_container">
        <div className="hero-content">
          <h1>TURNING SECONDS INTO FOREVER, <br /> ONE FRAME AT A TIME</h1>
          <p>
            Specialized in capturing amazing pictures and moments you would 
            always remember.
          </p>
          <button className="hero-btn">Send Us a Message</button>
        </div>
        <div className="hero-gallery">
          <img src={img1} alt="" className="hero-img img1"/>
          <img src={img2} alt="" className="hero-img img2"/>
          <img src={img3} alt="" className="hero-img img3"/>
          <img src={img4} alt="" className="hero-img img4"/>
          <img src={img5} alt="" className="hero-img img5"/>
        </div>
      </div>
    </div>
  )
}

export default Hero
