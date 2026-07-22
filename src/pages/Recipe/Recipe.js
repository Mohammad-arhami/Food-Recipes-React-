import React from 'react'
import './Recipe.css'
import { useParams } from 'react-router-dom';
import {useFetch} from '../../hooks/useFetch';
import { useThem } from '../../hooks/useThem';

export default function REcipe() {

  const { id } = useParams();
  const url = 'http://localhost:3000/recipes/'+id;
  const {data : recipe , isLoading , error} = useFetch(url);
  const {mode} = useThem();

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className='error'>{error}</p>}
      {isLoading && <p className='loading'>Loading...</p>}
      {recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <p className='cooking-time'>Take {recipe.cookingTime} To Cook</p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className='method'>{recipe.method}</p>
        </>
      )}
    </div>
  )
}
