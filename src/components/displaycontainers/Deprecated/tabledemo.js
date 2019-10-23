import React from 'react'
import styled from 'styled-components'

const CustomTable = styled.div`
{
    table {
        border-collapse: collapse;
        border: 00px solid white;
        width: 100%;        
    },        
    tr:nth-child(even) {
        background-color: white;
    },
    tr:nth-child(odd) {
        background-color: #E5E7E9;
    },
    th {
        border: 0px solid red;
        text-align: left;
        padding: 8px; 
        background-color: white;
    },
    td {
        border: 0px solid #E5E7E9;
        text-align: left;
        padding: 8px; 
    }    
}`

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
        <tr>
          <td>SpitsMedia</td>
          <td>Camilla Therese Hansen</td>
          <td>Norway</td>
        </tr>
        <tr>
          <td>Torstein Vadla</td>
          <td>Umoe Consulting</td>
          <td>Norway</td>
        </tr>
        <tr>
          <td>Christian Uchermann</td>
          <td>Umoe Consulting</td>
          <td>Norway</td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Berglunds snabbköp</td>
          <td>Christina Berglund</td>
          <td>Sweden</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Königlich Essen</td>
          <td>Philip Cramer</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
        <tr>
          <td>North/South</td>
          <td>Simon Crowther</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Paris spécialités</td>
          <td>Marie Bertrand</td>
          <td>France</td>
        </tr>
      </tbody>
    </table>
  </CustomTable>


export default TableDemo