import React, { useState, useEffect, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModel from '../UI/ErrorModal';

const Ingredients = () =>  {
  const [userIngredients, setUserIngredients ] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(()=> {
    console.log('RENDERING INGREDIENTS')

  }, [userIngredients])

  const filteredIngredientHandler = useCallback(filterIngredients => {
    setUserIngredients(filterIngredients);
  }, []);


  const addIngredientHandler = ingredient => {
    setIsLoading(true);
    fetch('https://react-hooks-6a580.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(response=> {
       setIsLoading(false);
       return response.json();
    })
    .then(responseData=> {
      setUserIngredients(prevIngredients=> [...prevIngredients, { id: responseData.name, ...ingredient}])
    })
    .catch(err=> {
      setIsLoading(false);
      setError('Something Went Wrong');

    });
    
  }
  const removeIngredientHandler = ingredientId => {
    setIsLoading(true);
    fetch(`https://react-hooks-6a580.firebaseio.com/ingredients/${ingredientId}.json`, {
      method: 'DELETE',
    })
    .then(response=> {
      setIsLoading(false);
      setUserIngredients(prevIngredients =>
        prevIngredients.filter(ingredient => ingredient.id !== ingredientId))
    })
    .catch(err=> {
      setIsLoading(false);
      setError('Something Went Wrong');

    });
   
    
  }

  const clearError = () => {
    setError(null);
  }
  return (
    <div className="App">
      {error ? <ErrorModel onClose={clearError}>{error}</ErrorModel> : null}
      <IngredientForm onAddIngredient = { addIngredientHandler } loading={isLoading}/>

      <section>
        <Search onLoadIngredients = {filteredIngredientHandler} />
        <IngredientList ingredients = {userIngredients} onRemoveItem = {removeIngredientHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
