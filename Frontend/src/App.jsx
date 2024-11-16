import React from 'react'
import Header1 from './Components/Header1/Header1'
import Navbar from './Components/Navbar/Navbar'
import Footer1 from './Components/Footer1/Footer1'
import Hero1 from './Components/Content1/Hero1/Hero1'
import Middle1 from './Components/Content1/Middle1/Middle1'


const App = () => {
  return (
    <div className='App'>
      <Header1/>
      <Navbar/>
      <Hero1/>
      <Middle1/>
      <Footer1/>
    </div>
  )
}
export default App
