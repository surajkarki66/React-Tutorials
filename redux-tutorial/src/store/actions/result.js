import * as actionTypes from './actionTypes';


export const saveResult = ( res ) => {      // sync 
    //const updatedResult = res * 2; // Change the reducer data here
    return {
        type: actionTypes.STORE_RESULT,
        result: res        
    };
};

export const storeResult = (res) => {
    return (dispatch, getState) => {                         //async
        setTimeout(()=> {
            const oldCounter = getState().ctr.counter;
            dispatch(saveResult(res))   // dispatch the sync code to reducer
        }, 2000);
    }
    
};

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    }
}


