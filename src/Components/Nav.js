import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
  <>
    <nav>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/buy">Buy</Link></li>
      <li><Link to="/contactUs">ContactUs</Link></li>
    </nav>
  </>
  )
};
