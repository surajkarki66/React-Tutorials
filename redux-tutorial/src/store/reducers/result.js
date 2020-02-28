import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch(action.type) {

        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})        // if u push then the array has no old stage.Danger
                
            }
            

        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);      //returns new array doesnt touch old
            return {
                ...state,
                results: updatedArray

            }
        
        default:
            return state;


    }
  
    //return state;
};

export default reducer;