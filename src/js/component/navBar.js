import React from 'react'

function NavBar() {
    const navStyle = {background: "black"}

  return (
    <ul className="nav justify-content-end" style={navStyle}>
  <li className="nav-item" >
    <a className="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Services</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">contact</a>
  </li>
</ul>
  )
}

export default NavBar