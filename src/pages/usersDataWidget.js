import React from "react"
import Layout from "../components/Layout";
import { Loading } from "../components/Loading"

const UsersDataWidget = ({usersList}) => (
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

export default UsersDataWidget