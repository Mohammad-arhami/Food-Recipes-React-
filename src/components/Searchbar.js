import React , { useState } from 'react'
import './Searchbar.css'
import { useNavigate } from 'react-router-dom';
import { useThem } from '../hooks/useThem';

export default function Searcbar() {

  const {mode} = useThem();

  const [term , setTerm] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search?q=${term}`)
  } 

  return (
    <div className='searchbar'>
      <form onSubmit={handleSubmit}>
        <label>search:</label>
        <input
          className={`input ${mode}`}
          id='search'
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          required
          autoComplete='off'
        />
      </form>
    </div>
  )
}
