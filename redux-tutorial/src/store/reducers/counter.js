import * as actionTypes from '../actions/actionTypes';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {

    switch(action.type) {

        case actionTypes.INCREMENT:
            return {
                ...state,              // Dont touch the old state update immutably
                counter: state.counter + 1
            }

        case actionTypes.DECREMENT:
            return {
                ...state, 
                counter: state.counter - 1
            }

        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }

        case actionTypes.SUB:
            return {
                ...state,  
                counter: state.counter - action.val
            }

        default:
            return state;

    }
  
    //return state;
};

export default reducer;