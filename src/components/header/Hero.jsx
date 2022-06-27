import React from 'react'
import './hero.css'
import HeroImg from '../../assets/w1.png'

const Hero = () => {
  return (
    <div className='container'>
      <div className="hero">
        <div className="hero-left">
          <div className="hero-title">
            <h3>Welcome To Fitness</h3>
            <h1>Work Hard To<br/> Get a Better Life</h1>
          </div>
          <div className="hero-text">
            <p>Hanky panky lavatory up the duff jolly good cack brolly is chinwag <br/>zonked happy days sloshed.</p>
          </div>
          <div className="hero-btns">
            <button onClick={()=>{
                        window.scrollTo({top: 1200, left:100, behavior:"smooth"})
                        }} className="animated-btn hero-ios-btn">Download for iOs</button>
            <button className="animated-btn hero-android-btn">Download for Android</button>
          </div>
        </div>


        <div className="hero-right">
          <div className="hero-right-img">
            <img src={HeroImg} alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero