import React from 'react'
import "./style.scss"
import {Routes, Route, Outlet} from 'react-router-dom'
import Nav from "./Components/Nav.js"
import Home from './pages/Home.js'
import ContactUs from './pages/ContactUs.js'
import Buy from './pages/Buy.js'


export default function() {
  let arr = ["Adem", "Jhon", "Matheo"]
  return (
    <>
      <Nav />
      <div id="router">
      <Routes>
        <Route path='/' element={<p>This is a layout<Outlet /></p>}>
          <Route index element={<Home />} />
          <Route path='contactUs' element={<ContactUs />} />
          <Route path='buy' element={<Buy />} />
        </Route>
      </Routes>
      <Outlet />
      </div>
    </>
  )
}