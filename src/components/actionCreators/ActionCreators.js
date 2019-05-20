export const asyncCreateUser = (user)=> {
    return (dispatch, getState, {getFirebase, getFirestore})=> {
     //make async call
     const firestore = getFirestore();
     firestore.collection('users').add({
         ...user, 
         createdAt: new Date()
     }).then(()=> {
     dispatch({ type: "CREATE_USER", payload: user})
    //Call Dispatch function
    // createUser(user);
   } ).catch( (err)=> {
       dispatch({type: 'CREATE_USER_ERROR', payload: err})
    })
}}
// import firebase from 'firebase/app';


// import 'firebase/auth';
// import 'firebase/database';

// // import { firebaseApp } from '../../config/fbConfig';
// const db = firebase.firestore()

// const createUser = (user)=>{
//     return {type: 'CREATE_USER', payload: user}
// }

// export const asyncCreateUser = (user)=>{
//     return (dispatch, getState)=> {
// db.collection('users').add({...user, time: Date.now()})
// .then(()=> {
//     console.log(`it is working`, user)
//           dispatch({ type: "CREATE_USER", payload: user})
//         // Call Dispatch function
//         // createUser(user);
//        } ).catch( (err)=> {
//            dispatch({type: 'CREATE_USER_ERROR', payload: err})
//         })
//     }
// }
export const increment = ()=> {
    return {type: 'INCREMENT'}
} 