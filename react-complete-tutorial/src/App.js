import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {name: 'Michael Karki', age: 20},
      {name: 'Suraj Karki', age: 20}
    ],
    otherState: "Other",
    showPersons: false
  }

  switchNameHandler = (newName) => {
   // Dont do this this.state.persons[0].name = "Suraj Karki";
    this.setState({ 
      persons: [
        
          {name: newName, age: 10}, // This will be append in persons array of state.
          {name: 'Suraj', age: 10}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({ 
      persons: [
        
          {name: 'Michael Karki', age: 10}, // This will be append in persons array of state.
          {name: event.target.value, age: 19}
      ]
    })
  }

  togglePersonHandler = () => {
    let doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
        <Person 
         name={this.state.persons[0].name} 
         age={this.state.persons[0].age}
         click={this.switchNameHandler.bind(this, 'Michael')}>My Hobies: Only Coding</Person>
       <Person
         name={this.state.persons[1].name}
         age={this.state.persons[1].age} 
         changed={this.nameChangedHandler} />  
        </div>
      )
    }
    return (
      <div className="App">
        <h1>This is my journey to React</h1>
        <h2>This is Working</h2>
        <button
         style={style}
         onClick={this.togglePersonHandler}>Toggle Name</button>  
         {persons}      
      </div>
      
    );
  }
}

export default App;
