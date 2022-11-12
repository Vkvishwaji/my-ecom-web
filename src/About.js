import React from 'react'
 import { useProductContext } from './context/ProductContext'
import HeroSection from './HeroSection'
 

const About = () => {
const {myName}=  useProductContext()

  const data={
    name:"Tech Ecommerce"
  }
  return (
    <div>
    {myName}
      <HeroSection myData={data}/>
    </div>
  )
}

export default About