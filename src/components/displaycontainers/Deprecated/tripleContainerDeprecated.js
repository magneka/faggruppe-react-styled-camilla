import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  grid-area: ContentArea;
  grid-gap: 50px;
`;

const TripleGrid = styled.div`
display: grid;
grid-template-columns: 3fr 2fr;
grid-template-rows: 1.5fr 1fr;
grid-template-areas: "TopLeftArea TopRightArea" "bottomArea bottomArea";
height: 100%;
grid-gap: 10px;

& * {
  border-bottom: 10px solid #E5E7E9; 
  border-left: 10px solid #E5E7E9; 
  border-right: 10px solid #E5E7E9;   
  position: relative;  
}

& :after {
 position: absolute;
 top: 0;
 left: 0;
}
`;

const TopLeft = styled.div`
  grid-area: TopLeftArea;  
  background-color: white;       
`;

const TopRight = styled.div`
  grid-area: TopRightArea;
  background-color: white;     
`;

const BottomArea = styled.div`
  grid-area: bottomArea;
  background-color: white;
  overflow: hidden;
`;

const GrayHeader = styled.div`
  height: 20px;      
  background-color: #E5E7E9;  
  line-height: 25px; 
  padding: 0px;
`;

const GrayHeaderText = styled.span`    
  font-size: 16px;   
  letter-spacing: 6px;
  vertical-align: bottom; 
  padding: 0px;
  border: 0px;
  background-color: none;
`;

const WindowText = styled.div`    
  padding: 10px; 
  border: 6px white;     
  & * {
    border-bottom: 0px solid white; 
    border-left: 0px solid white; 
    border-right: 0px solid white;   
    position: relative; 
  } 
`;

function TripleContainerDeprecated(props) {
  return (
    <Wrapper>
      <TripleGrid>
        <TopLeft>
          <GrayHeader>
            <GrayHeaderText>
              {props.tlHeader}
            </GrayHeaderText>
          </GrayHeader>
          <WindowText>{props.tlBody}</WindowText>

        </TopLeft>
        <TopRight>
          <GrayHeader>
            <GrayHeaderText>
              dp {props.trHeader}
            </GrayHeaderText>
          </GrayHeader>
          <WindowText>{props.trBody}</WindowText>
        </TopRight>
        <BottomArea>
          <GrayHeader>
            <GrayHeaderText>
              {props.botHeader}
            </GrayHeaderText>
            <WindowText>{props.botBody}</WindowText>
          </GrayHeader>
        </BottomArea>
      </TripleGrid>

    </Wrapper>
  )
}

export default TripleContainerDeprecated;