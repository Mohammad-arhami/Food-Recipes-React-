import { Link } from 'react-router-dom'

import React from 'react'
import './Navbar.css'

export default function NavBar() {
  return (
    <div className='navbar'>
      <nav>
        <Link to="/" className='brand'><h1>Food Recipes</h1></Link>
        <Link to="/create">Crete Recipe</Link>
      </nav>
    </div>
  )
}
