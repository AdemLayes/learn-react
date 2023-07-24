import React from 'react'
import "./Nav.css"
import {Link, Outlet} from 'react-router-dom'

export default function Nav() {
  return (
  <>
    <nav>
      <li><Link to="/">Home</Link></li>
      <li><Link to="contactUs">ContactUs</Link></li>
      <li><Link to="buy">Buy</Link></li>
    </nav>
    <Outlet />
  </>
  )
};
