import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  grid-area: ContentArea;
  height: 100%;  
`

const WindowWrapper = styled.div`
  background-color: white;
  border-left: 10px solid #E5E7E9;
  border-right: 10px solid #E5E7E9;
  border-bottom: 10px solid #E5E7E9;
  border-top: 0px solid #E5E7E9;
  color: black;  
  padding-bottom: 0px;
  height: 98%;
  overflow: auto;
`

const GrayHeader = styled.div`
  height: 20px;      
  background-color: #E5E7E9;  
  line-height: 25px; 
  padding: 5px;
`

const GrayHeaderText = styled.span`    
  font-size: 16px;   
  letter-spacing: 6px;
  vertical-align: bottom; 
  padding: 0px;
  border: 0px;
  background-color: none;
`

const WindowText = styled.div`    
  padding: 10px; 
  border: 6px white;     
  & * {      
    border-bottom: 0px solid white; 
    border-left: 0px solid white; 
    border-right: 0px solid white;   
    position: relative;  
  }
`

/* Produce a framed window with caption on top */
const WindowContainer = (props) => (
    <Wrapper>
        <WindowWrapper>
            <GrayHeader>
                <GrayHeaderText>
                    {props.header}
                </GrayHeaderText>
            </GrayHeader>
            <WindowText>{props.content}</WindowText>
        </WindowWrapper>
    </Wrapper>
)

export default WindowContainer;