import React, { useEffect } from 'react'
import { useState } from "react";
import './Create.css'
import { useFetch } from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

export default function Create() {

  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredients , setNewIngredients] = useState('');
  const [ingredients , setIngredients] = useState([]);

  const {postData, data , error} = useFetch('http://localhost:3000/recipes' , 'POST')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!error) {
      postData({title, ingredients, method , cookingTime : cookingTime + ' minuts'});
    }
  }

  const handleAdd = (e) => {
    e.preventDefault()
    if (newIngredients && !ingredients.includes(newIngredients)) {
      setIngredients(prevIngredients => [...prevIngredients , newIngredients]);
    }
    setNewIngredients('');
  }

  useEffect(() => {
    if (data) {
      navigate('/')
    }
  }, [data])

  return (
    <div className='create'>
      <h2 className='page-title'>Create</h2>

      <form onSubmit={handleSubmit}> 

        <label>
            <span>Recipe Title: </span>
            <input 
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </label>

          <label>
            <span>Recipe Ingredients</span>
            <div className="ingredients">
              <input 
                type="text"
                onChange={(e) => setNewIngredients(e.target.value)}
                value={newIngredients}
              />
              <button className="btn" onClick={handleAdd}>Add</button>
            </div>
          </label>

          <p>Current Ingredients: {ingredients.map(i => <b><em key={i}>{`${i}, `}</em></b>)}</p>

          <label>
            <span>Recipe Method: </span>
            <textarea 
              onChange={(e) => setMethod(e.target.value)}
              value={method}
              required
            />
          </label>

          <label>
            <span>Coocking Time(m): </span>
            <input
              type="number"
              onChange={(e) => setCookingTime(e.target.value)}
              value={cookingTime}
              required
            />
          </label>

          <button className="btn">Submit</button>
          
      </form>
    </div>
  )
}
