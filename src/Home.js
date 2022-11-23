import React from 'react'
import FeatureProduct from './components/FeatureProduct'
import HeroSection from './HeroSection'
import Services from './Services'
import Trusted from './Trusted'

const Home = () => {

  const data={
    name:'Tech Store'
  }
  return (
    <>
    <HeroSection myData={data}/>
    <FeatureProduct/>
    <Services/>
    <Trusted/>
    </>
  )
}

export default Home