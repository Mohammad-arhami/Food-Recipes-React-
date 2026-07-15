import { Link } from 'react-router-dom'
import React from 'react'
import './RecipeList.css'

export default function RecipeList({recipes}) {
  return (
    <div className='recipe-list'>
      {recipes.map(recipe => (
        <div key={recipe.id} className='card'>
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} To Make</p>
            <div>{recipe.method.substring(0,100)}...</div>
            <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  )
}
// data.map((recipe) => (
//         <h2 key={recipe.id}>{recipe.title}</h2>
//       ))