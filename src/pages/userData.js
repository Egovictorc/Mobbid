import React, { useState, useEffect } from 'react'
import firebase from "firebase/app";

import { DATABASE } from "../constants/db"
import UsersDataWidget from './usersDataWidget';


export default function userData() {

    const [usersList, setUsersList ] = useState([])
    const [error, setError ] = useState({})

    // const db = firebase.firestore();
    const users = DATABASE.collection('users')

    const data = [];
    const getUsers = async() => 
    users.orderBy(`Date`, `desc`).get()
        .then( (snapshot) => snapshot.forEach( doc => data.push(doc.data()) )
        )
        .then(() => setUsersList(data))
        .catch( err => {
            setError(err) 
            // console.log(`user error:::: `, err)
        })

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
