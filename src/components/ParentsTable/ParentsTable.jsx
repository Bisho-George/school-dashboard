import React from 'react'
import { parentTableFields } from '../../constants/index.js'
import { tempParentsTableData } from '../../constants/index.js'
import './parentsTable.css'
const ParentsTable = () => {
    return (
        <table class="table">
            <thead>
                <tr>
                    {parentTableFields.map((field) => (
                        <th className='th' scope="col">{field}</th>
                    ))}

                </tr>
            </thead>
            <tbody>
                {tempParentsTableData.map((data) => (
                    <tr key={data.id}>
                    <td> <img src={data.picture} alt="dataPic"/></td>
                    <td>{data.name}</td>
                    <td>{data.username}</td>
                    <td>{data.password}</td>
                    <td>{data.gender}</td>
                    <td>{data.studentNumber}</td>
                    <td>{data.address}</td>
                    <td>{data.phoneNumber}</td>
                    <td>{data.paymentMethod}</td>
                </tr>

                ))}
                
            </tbody>
        </table>
    )
}

export default ParentsTable
