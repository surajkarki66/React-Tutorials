import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }

`;

class App extends Component {
  state = {
    persons: [
      {id: 'akljjf', name: 'Michael Karki', age: 20},
      {id: 'allja', name: 'Saman Shrestha', age: 20},
      {id: 'ksfj', name: 'Binish Joshi', age: 20}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }; 

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons })
  }
  deletePersonHandler = (personIndex) => {
   // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);  ///delete one element from the array.
    this.setState({persons:persons})
  }

  togglePersonHandler = () => {
    let doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
   /* const style = {
      backgroundColor: 'green',
      color: 'white', 
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
    */
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
             click = {this.deletePersonHandler.bind(this, index)} 
             name={person.name}
             age={person.age}
             key = {person.id}
             changed = {(event) => this.nameChangedHandler(event, person.id)}
             />
          })}
        </div>
      );
       //style.backgroundColor = 'red';
       //style[':hover'] = {
         //backgroundColor: 'salmon',
         //color: 'black'
       //}

    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');  // classes = ['red']
    }
    if (this.state.persons.length <=1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }
    return (
      <div className="App">
        <h1>This is my journey to React</h1>
        <h2 className={classes.join(' ')}>This is Working</h2>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>Toggle Name</StyledButton>
         {persons}      
      </div>

      
    );
  }
}

export default App;
