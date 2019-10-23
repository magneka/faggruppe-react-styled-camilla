import React from 'react'
import styled from 'styled-components'

const BlankSpacer = styled.div`
  background-color: #243746;
  grid-area: blankTop;
`

const BlankTop = props => <BlankSpacer>{props.children}</BlankSpacer>

export default BlankTop