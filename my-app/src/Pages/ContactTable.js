import React, { useState } from "react";
function ContactTable(){
    const[values,setValues]=useState([]);
    return <div>
        <table>
            <tr>
                <th>First Name</th>
                <th>ph</th>
                <th>email</th>
            </tr>
            {values.map((val)=>
            <tr>
                <td>{values.firstname}</td>
                <td>{values.ph}</td>
                <td>{values.email}</td>
            </tr>
            )}
        </table>
    </div>

}
export default ContactTable;