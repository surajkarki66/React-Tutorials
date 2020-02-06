import React from 'react';

import './Person.css';


const person = (props) => {
    return (
        <div className="Person">
             <p onClick={props.click}>I am {props.name} and i am {props.age} years old.</p>
             <p>{props.children}</p>
             <input type="text" onChange={props.changed} value={props.name} />
        </div>
   
    )
}

export default person;