import React from 'react'
import styled from 'styled-components'

import WindowContainer from './windowContainer.js'

const Wrapper = styled.div`  
  grid-area: ContentArea;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;   
  grid-area: ContentArea; 
  padding-bottom: 0px; 
`;

const SingleContainer = (props) => (
    <Wrapper>     
        <WindowContainer header={props.tlHeader} content={props.tlBody} />                  
    </Wrapper>
)

export default SingleContainer;