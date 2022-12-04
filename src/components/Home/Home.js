import React from 'react'
import Section from '../Section/Section'
import style from './Home.module.css'
import Navbar from '../Navbar/Navbar'
function Home() {
  return (
    <div className={style.container}>
      <Navbar />
      <Section title="Model 3"
        description="Order online for "
        backgroundImage="model-3.jpg"
        linkDes="Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        first={true}
      />
      <Section title="Model Y"
        description="Order online for "
        backgroundImage="model-y.jpg"
        linkDes="Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section title="Model S"
        description="Order online for "
        backgroundImage="model-s.jpg"
        linkDes="Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section title="Model X"
        description="Order online for "
        backgroundImage="model-x.jpg"
        linkDes="Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImage="solar-panel.jpg"
        leftButton="Order Now"
        rightButton="Learn More"
      />
      <Section title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImage="solar-roof.jpg"
        leftButton="Order Now"
        rightButton="Learn More"
      />
      <Section title="Accessories"
        backgroundImage="accessories.jpg"
        leftButton="Shop Now"
      />
    </div>
  )
}

export default Home