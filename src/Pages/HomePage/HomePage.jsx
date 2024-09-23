// import React from 'react'

import Banner from "./Components/Banner/Banner"
import FAQ from "./Components/FAQ/FAQ"
import Introduction from "./Components/Introduction/Introduction"
import Location from "./Components/Location/Location"
import OurGroup from "./Components/OurGroup/OurGroup"
import Pricing from "./Components/Pricing/Pricing"

const HomePage = () => {
  const animateOnce = true;

  return (
    <div>
      <Banner animateOnce={animateOnce} />
      <Introduction animateOnce={animateOnce} />
      <Pricing animateOnce={animateOnce} />
      <FAQ animateOnce={animateOnce} />
      <Location animateOnce={animateOnce} />
      <OurGroup animateOnce={animateOnce} />
    </div>
  )
}

export default HomePage
