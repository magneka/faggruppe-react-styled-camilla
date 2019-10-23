import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: white;
  border: 10px solid #E5E7E9;
  color: black

  padding-bottom: 19px; 
  grid-area: ContentArea;
`

const DashBoardHeader = styled.span`
  background-color:  #E5E7E9;
  color: black;
  display: block;
  position: relative;
  top: -6px;
  height: 27px; 
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 6px;
  font-weight: 600;
  bottom: -20;  
`

const DashBoardContent = styled.div`
  background-color: white;  
  color: black; 
  padding: 10px; 
`

const DashBoardWindow = props => 
  <Wrapper>
    <DashBoardHeader>{props.caption}</DashBoardHeader>
    <DashBoardContent>{props.children}</DashBoardContent>
  </Wrapper>

export default DashBoardWindow