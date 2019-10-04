import React, { useState, useEffect } from 'react'
import firebase from "firebase/app";

import { DATABASE } from "../constants/db"
import UsersDataWidget from './usersDataWidget';


export default function userData() {

    const [usersList, setUsersList ] = useState([])
    const [error, setError ] = useState({})
    
    var connectedRef = firebase.database().ref(".info/connected");
    connectedRef.on("value", function(snap) {
      if (snap.val() === true) {
        alert("connected");
      } else {
        alert("not connected");
      }
    });
   
    let data = [];
    const getUsers = async() => {
        // const db = firebase.firestore();
      
  
        console.log(`log database:::::: `, DATABASE.collection("users").firestore._queue)
     const users = await DATABASE.collection('users')

     users.orderBy(`Date`, `desc`).get()
         .then( (snapshot) => {
            //  console.log(`snapshot::::`, snapshot)
             data = snapshot.docs.map( doc => ({ ...doc.data(), id: doc.id}) )
            //  snapshot.forEach( doc => data.push({...doc.data(), id: doc.id}) )
             console.log(`data::::: `, data)
           return setUsersList(data)
         })
         .catch( err => {
             setError(err) 
             console.log(`${err.name}: ${err.message}`)
         })
    }
    console.log(`data::::: `, data)
        // console.log(`getUsers::::::: `, getUsers())
        // console.log(`errors:::: `, error)
        // console.log(`users:::: `, users)
        // console.log(`DATABASE:::: `, DATABASE)
        // console.log(`users check::::: `, getUsers())

    useEffect( ()=> {
        getUsers()
    }, [] )


    return (
        <UsersDataWidget usersList={usersList} />
    )
}
