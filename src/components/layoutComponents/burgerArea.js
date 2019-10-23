import React from 'react'
import styled from 'styled-components'

const BurgerSpacer = styled.div`
  background-color: #132634;  
  grid-area: BurgerArea; 
`

const BurgerIcon = styled.span`
    color: white;
    font-size: 14px; 
    vertical-align: middle; 
    text-align: center; 
    width: 20px;
 `

const BurgerArea = props => 
  <BurgerSpacer>
    <BurgerIcon className="fa fa-bars" onClick={() => props.toggleMenu()}></BurgerIcon>
  </BurgerSpacer>

export default BurgerArea