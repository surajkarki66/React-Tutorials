import React, { useState } from 'react';

import Card from '../UI/Card';
import LoadingIndicator from '../UI/LoadingIndicator';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  const [ enteredTitle, setEnteredTitle ] = useState('');
  const [ enteredAmount, setEnteredAmount ] = useState('');
  const submitHandler = event => {
    event.preventDefault();
    props.onAddIngredient({title: enteredTitle, amount: enteredAmount});
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title"
                   value={enteredTitle}
                   onChange={event=> {
                     const newTitle = event.target.value;
                     setEnteredTitle(newTitle)
                     }} />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number"
                   id="amount"
                   value={enteredAmount}
                   onChange={event=> {
                     const newAmount = event.target.value;
                     setEnteredAmount(newAmount)
                   }} />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading ? <LoadingIndicator /> : null}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
