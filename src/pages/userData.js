import React, { useState, useEffect } from 'react'
import firebase from "firebase/app";
import Layout from "../components/Layout";
import { Loading } from "../components/Loading"



export default function userData() {

    const [usersList, setUsersList ] = useState([])
    const [error, setError ] = useState({})

    const db = firebase.firestore();
    const users = db.collection('users')

    const data = [];
    const getUsers = async() => 
    users.orderBy(`Date`, `desc`).get()
        .then( (snapshot) => snapshot.forEach( doc => data.push(doc.data()) )
        )
        .then(() => setUsersList(data))
        .catch( err => setError(err) )

        
    useEffect( ()=> {
        getUsers()
    }, [] )


    return (
        <Layout title="usersList">
            { (usersList.length > 0 ) ? (
               <table>
                     <thead>
                     <tr>
                        <th> S/N </th>
                        <th> FirstName </th>
                        <th> PhoneNumber </th>
                        <th> Date </th>
                     </tr>
                     </thead>
                   <tbody>
                   {usersList.map( ( {id, firstName, phoneNumber, Date}, index ) => <tr key={phoneNumber}>
                        <td> {index + 1} </td>
                        <td> {firstName} </td>
                        <td> 0{phoneNumber} </td>
                        <td> {Date} </td>
                    </tr>
                    )}
                   </tbody>
               </table>
            ) : <
                Loading />}
        </Layout>
    )
}
