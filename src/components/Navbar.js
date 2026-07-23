import { Link } from 'react-router-dom';
import React from 'react';
import './Navbar.css';
import Searchbar from './Searchbar';
import { useThem } from '../hooks/useThem';

export default function NavBar() {

  const {color} = useThem()

  return (
    <div className='navbar' style={{background: color}}>
      <nav>
        <Link to="/" className='brand'><h1>Food Recipes</h1></Link>
        <Searchbar/>
        <Link to="/create">Crete Recipe</Link>
      </nav>
    </div>
  )
}
