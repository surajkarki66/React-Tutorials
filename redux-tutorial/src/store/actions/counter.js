import * as actionTypes from './actionTypes';


// Action creators are function which just returns action. Eg increment is actioncreator
// It helps to run async code
export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
};

export const add = (value) => {
    return {
        type: actionTypes.ADD,
        val: value
    };
};

export const sub = (value) => {
    return {
        type: actionTypes.SUB,
        val: value  
    };
};
