import React from 'react'
import styled from 'styled-components'

const CustomTable = styled.div`
{
    & table {
        border-collapse: collapse;
        border: 00px solid white;
        width: 100%;        
    },        
    & tr:nth-child(even) {
        background-color: white;
    },
    & tr:nth-child(odd) {
        background-color: #E5E7E9;
    },
    & th {
        border: 0px solid red;
        text-align: left;
        padding: 8px; 
        background-color: white;
    },
    & td {
        border: 0px solid #E5E7E9;
        text-align: left;
        padding: 8px; 
    }    
}`

const tableData = [
    { Company: 'SpitsMedia', Contact: 'Camilla Therese Hansen', Country: 'Norway' },
    { Company: 'Torstein Vadla', Contact: 'Umoe Consulting', Country: 'Norway' },
    { Company: 'Christian Albert Uchermann', Contact: 'Umoe Consulting', Country: 'Norway' },
    { Company: 'Berglunds snabbköp', Contact: 'Christina Berglund', Country: 'Sweden' },
    { Company: 'Centro comercial Moctezuma', Contact: 'Francisco Chang', Country: 'Mexico' },
    { Company: 'Ernst Handel', Contact: 'Roland Mendel', Country: 'Austria' },
    { Company: 'Island Trading', Contact: 'Helen Bennett', Country: 'UK' },
    { Company: 'Königlich Essen', Contact: 'Philip Cramer', Country: 'Germany' },
    { Company: 'Laughing Bacchus Winecellars', Contact: 'Yoshi Tannamuri', Country: 'Canada' },
    { Company: 'Magazzini Alimentari Riuniti', Contact: 'Giovanni Rovelli', Country: 'Italy' },
    { Company: 'North/South', Contact: 'Simon Crowther', Country: 'UK' },
    { Company: 'Paris spécialités', Contact: 'Marie Bertrand', Country: 'France' },
]

const TableDemo = () =>
    <CustomTable>
        <table>
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((c, i) => (
                    <tr key={i}>
                        <td>{c.Company}</td>
                        <td>{c.Contact}</td>
                        <td>{c.Country}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </CustomTable>

export default TableDemo