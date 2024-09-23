// import React from 'react'

import Body from "./Layouts/Body/Body"
import Footer from "./Layouts/Footer/Footer"
import Header from "./Layouts/Header/Header"

const App = () => {
  return (
    <div className="max-w-[1520px] mx-auto relative">
      <div className="sticky top-0 z-10">
        <Header />
      </div>
      <div className="z-0">
        <Body />
      </div>
      
      <Footer />
    </div>
  )
}

export default App
