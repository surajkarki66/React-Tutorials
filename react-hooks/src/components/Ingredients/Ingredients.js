import React, { useState, useEffect, useCallback, useReducer } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModel from '../UI/ErrorModal';

// using useReducer instead of useState for the scenario where states are closely related to each other.
// always outside the functional component if want props make inside functional component.
// When working with useReducer , react will re render the component  whenever  your reducer returns the new state
const ingredientReducer = (currentIngredient, action) => {
  switch (action.type) {
    case 'SET': 
      return action.ingredients;
    case 'ADD':
      return [...currentIngredient, action.ingredient];
    case 'DELETE':
      return currentIngredient.filter(ing => ing.id !== action.id);
    default:
      throw new Error('Should not get there!');
  }
};

// Another reducer
const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case 'SEND':
      return { loading: true, error: null};
    case 'RESPONSE':
      return {...curHttpState,  loading: false};
    case 'ERROR':
      return { loading: false, error: action.errorMessage};
    case 'CLEAR':
      return {...curHttpState, error: null};
    default:
      throw new Error('Should not be reached!');
  }
}



const Ingredients = () =>  {
  // Initializing useReducer
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []); // for first time
  const [httpState, dispatchHttp] = useReducer(httpReducer,  {loading: false, error: null});


  //const [userIngredients, setUserIngredients ] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  //const [error, setError] = useState();
  
  useEffect(()=> {
    console.log('RENDERING INGREDIENTS')

  }, [userIngredients])

  const filteredIngredientHandler = useCallback(filterIngredients => {
    //setUserIngredients(filterIngredients);
    dispatch({type: 'SET',ingredients: filterIngredients })  // dispatching the action.
  }, []);


  const addIngredientHandler = ingredient => {
    //setIsLoading(true);
    dispatchHttp({type: 'SEND'});
    fetch('https://react-hooks-6a580.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(response=> {
       //setIsLoading(false);
       dispatchHttp({type: 'RESPONSE'});
       return response.json();
    })
    .then(responseData=> {
     // setUserIngredients(prevIngredients=> [...prevIngredients, { id: responseData.name, ...ingredient}])
     dispatch({type: 'ADD', ingredient:  { id: responseData.name, ...ingredient} })
    })
    .catch(err=> {
     // setIsLoading(false);
      //setError('Something Went Wrong');
      dispatchHttp({type: 'ERROR', errorMessage: 'Something Went Wrong!'});

    });
    
  }
  const removeIngredientHandler = ingredientId => {
    //setIsLoading(true);
    dispatchHttp({type: 'SEND'});
    fetch(`https://react-hooks-6a580.firebaseio.com/ingredients/${ingredientId}.json`, {
      method: 'DELETE',
    })
    .then(response=> {
     // setIsLoading(false);
     dispatchHttp({type: 'RESPONSE'});
     // setUserIngredients(prevIngredients =>
       // prevIngredients.filter(ingredient => ingredient.id !== ingredientId))
       dispatch({type: 'DELETE', id: ingredientId});
    })
    .catch(err=> {
      dispatchHttp({type: 'ERROR', errorMessage: 'Something Went Wrong!'});

      //setIsLoading(false);
      //setError('Something Went Wrong');

    });
   
    
  }

  const clearError = () => {
    //setError(null);
    dispatchHttp({type: 'CLEAR'});
  }
  return (
    <div className="App">
      {httpState.error ? <ErrorModel onClose={clearError}>{httpState.error}</ErrorModel> : null}
      <IngredientForm onAddIngredient = { addIngredientHandler } loading={httpState.loading}/>

      <section>
        <Search onLoadIngredients = {filteredIngredientHandler} />
        <IngredientList ingredients = {userIngredients} onRemoveItem = {removeIngredientHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
