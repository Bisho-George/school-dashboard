import { Container, Box, Select } from '@mui/material'
import React from 'react'
import ParentsTable from '../../components/ParentsTable/ParentsTable.jsx'
import ParentsFilter from '../../components/ParentsFilter/ParentsFilter.jsx'

const Parents = () => {
    return (
        <section className='container-fluid'> 
            <ParentsFilter />
            <ParentsTable/>
        </section>
    )
}

export default Parents
