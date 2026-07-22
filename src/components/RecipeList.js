import { Link } from 'react-router-dom'
import React from 'react'
import './RecipeList.css'
import { useThem } from '../hooks/useThem'

export default function RecipeList({recipes}) {

  const {mode} = useThem();

  return (
    <div className='recipe-list'>
      {recipes.map(recipe => (
        <div key={recipe.id} className={`card ${mode}`}>
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} To Make</p>
            <div>{recipe.method.substring(0,100)}...</div>
            <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  )
}
