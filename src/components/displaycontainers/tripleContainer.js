import React from 'react'
import styled from 'styled-components'

import WindowContainer from './windowContainer.js'

const Wrapper = styled.div`  
  grid-area: ContentArea;  
  grid-area: ContentArea; 
`

const WindowsWrapper = styled.div`  
  border: 0px solid red;
  display: grid;
  grid-gap: 10px;
  background-color: #132634;
  grid-template-columns: minmax(400px, 600px) auto ;
  grid-template-rows: auto  minmax(400px, 400px);
  grid-template-areas: 
    "topLeft topRight"  
    "bottomArea bottomArea"; 
`

const TopLeft = styled.div`    
  grid-area: topLeft;  
`

const TopRight = styled.div`
  grid-area: topRight;
`

const BottomArea = styled.div`  
  grid-area: bottomArea;
`

const TripleContainer = (props) =>  (
    <Wrapper>
      <WindowsWrapper>

        <TopLeft>
        <WindowContainer header={props.tlHeader} content={props.tlBody} />          
        </TopLeft>

        <TopRight>
          <WindowContainer header={props.trHeader} content={props.trBody} />          
        </TopRight>

        <BottomArea>
          <WindowContainer header={props.botHeader} content={props.botBody} />
        </BottomArea>

      </WindowsWrapper>
    </Wrapper>
  )

export default TripleContainer