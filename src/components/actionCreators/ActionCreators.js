export const asyncCreateUser = (user)=> {
    return (dispatch, getState, {getFirebase, getFirestore})=> {
     //make async call
     const firestore = getFirestore();
     firestore.collection('users').add({
         user, 
         createdAt: new Date()
     }).then(()=> {
    //  dispatch({ type: "CREATE_USER", payload: user})
    //Call Dispatch function
    createUser(user);
   } ).catch( (err)=> {
       dispatch({type: 'CREATE_USER_ERROR', payload: err})
    })
}}

export const createUser = (user)=>{
    return {type: 'CREATE_USER', payload: user}
}