import React from 'react'
import './Search.css'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';

export default function Search() {

  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  const url = `http://localhost:3000/recipes`;
  const {data ,isLoading, error} = useFetch(url);
  
  const recipes = data?.filter(recipe => {
    const titlkeRecipe = recipe.title.toLowerCase().includes(query.toLowerCase());
    return titlkeRecipe
  })

  return (
    <div>
      <h2 className='page-title'>recipes Including "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isLoading && <p className='loading'>Loading...</p>}
      {recipes && <RecipeList recipes={recipes}/>}
    </div>
  )
}
