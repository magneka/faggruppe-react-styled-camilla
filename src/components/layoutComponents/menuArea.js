import React from 'react'
import styled from 'styled-components'

const MenuSpacer = styled.div`
  background-color:  #132634;
  grid-area: MenuArea; 
  font-color: white;
  position: relative;
  top: -4px;
`

const MenuArea = props => <MenuSpacer>{props.children}</MenuSpacer>

export default MenuArea