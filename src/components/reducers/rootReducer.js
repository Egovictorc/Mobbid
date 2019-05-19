import React from 'react';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initState = {
    // users: [
    //     {id: "1", firstName: "", lastName: "", workLocation: "", homeLocation: ""},
    //     {id: "2", firstName: "", lastName: "", workLocation: "", homeLocation: ""},
    //     {id: "3", firstName: "", lastName: "", workLocation: "", homeLocation: ""},
    // ]
    users: [
        {id: "1", firstName: "", phoneNumber: ""},
        {id: "2", firstName: "", phoneNumber: ""},
        {id: "3", firstName: "", phoneNumber: ""},
    ],
    errors: []
}

const rootReducer = (state = initState, action)=> {
    let originalUsers = state.users;
    

    switch(action.type) {
        case "CREATE_USER":
        let user = action.payload;
        user.id = originalUsers.length + 1;
        return {...state, users: [...originalUsers, user] };

        case "CREATE_USER_ERROR":
        return {...state, errors: [...state.errors, action.payload] };
        default: 
        return state;
    }
}

export default combineReducers({
    rootReducer,
    form: formReducer //meant for redux-form
})