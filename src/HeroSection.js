import React from 'react'

const HeroSection = ({myData}) => {

    const {name} = myData
  return (
    <>
     <div>
      <div className="container mt-5 head-main-1 text-center">
  <div className="row">
    <div className="col">
    <p className='fw-light head-p-1'>Welcome to</p>
      <h1 className='head-1'>{name}</h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, maiores ipsam nihil inventore eligendi maxime voluptatem commodi veniam vitae eius impedit quisquam cupiditate omnis? </p>
      <a href="/contact">

      <button type="button"  className="btn head-btn btn-primary btn-lg">Large button</button>
      </a>
    </div>
    <div className="col">
    <figure>

    <img src='./images/hero.jpg' width='550px' alt='hero section'/> 
    </figure>
    </div>
  </div>
  </div>
  </div>
    </>
  )
}

export default HeroSection