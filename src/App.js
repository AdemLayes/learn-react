import React from 'react'
import {Routes, Route, Link, Outlet} from 'react-router-dom'
import "./App.css"
import Nav from "./Nav.js"
import Home from './pages/Home.js'
import ContactUs from './pages/ContactUs.js'
import Buy from './pages/Buy.js'


export default function() {
  return (
    <>
      <Nav />
      <div id="router">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contactUs' element={<ContactUs />} />
        <Route path='buy' element={<Buy />} />
      </Routes>
      </div>
      <h2>Contant</h2>
      <p>bla bla blabl alrgekrgfo irhg ergh oeu</p>
      <p>bla bla blabl alrgekrgfo irhg ergh oeu</p>
      <p>bla bla blabl alrgekrgfo irhg ergh oeu</p>
      <p>bla bla blabl alrgekrgfo irhg ergh oeu</p>
      <section>
      <div id='secoundLinkContainer'>
        <Link to="/">goHome</Link>
        <Link to="buy2">goBuy</Link>
        <Link to="contactUs2">goContactUs</Link>
        <Outlet/>
      </div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='buy2' element={<Buy />}/>
        <Route path='contactUs2' element={<ContactUs />}/>
      </Routes>
      </section>
    </>
  )
}