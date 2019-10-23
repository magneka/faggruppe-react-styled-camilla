import React from 'react'
import styled from 'styled-components'

const TopSpacer = styled.div`
  background-color: #132634;
  grid-area: FooterArea; 
`

const FooterArea = props => <TopSpacer>{props.children}</TopSpacer>

export default FooterArea