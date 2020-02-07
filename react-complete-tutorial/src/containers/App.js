import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'


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
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
           persons={this.state.persons}
           clicked={this.deletePersonHandler}
           changed = {this.nameChangedHandler} />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
         title = {this.props.appTitle}
         showPersons = {this.state.showPersons}
         persons = {this.state.persons}
         clicked = {this.togglePersonHandler} /> 
         {persons}      
      </div>

      
    );
  }
}

export default App;
