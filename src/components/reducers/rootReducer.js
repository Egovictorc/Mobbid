import React from 'react';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initState = {

}

const rootReducer = (state = initState, action)=> {
    switch(action.type){
        default:
        return state;
    }
}

export default combineReducers({
    rootReducer,
    form: formReducer
})