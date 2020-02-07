import React from 'react';
import classes from './Cockpit.css';

const cockpit = ( props ) => {
    let btnClass = '';
    const assignedClasses = [];
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);  // classes = ['red']
    }
    if (props.persons.length <=1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <h2 className={assignedClasses.join(' ')}>This is Working</h2>
            <button className={btnClass} onClick={props.clicked}>Toggle Name</button>
        </div>
        );
};

export default cockpit;