import React from 'react'
import styled from 'styled-components'
import logo from './../../logo_transparent.png'

const TopSpacer = styled.div`
  background-color: #132634;
  grid-area: menuSpacer;
  margin-top: 10px;
  margin-left: 55px;
`

const MenuSpacer = props => <TopSpacer><img src={logo} alt="magne@" height="70" /></TopSpacer>

export default MenuSpacer;