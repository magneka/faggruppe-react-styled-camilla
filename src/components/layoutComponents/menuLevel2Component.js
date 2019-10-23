import React, { useState } from 'react'
import styled from 'styled-components'

const MenuLevel2container = styled.div`
  color: white;
  margin-top: 4px; 
  line-height: 58px; /* aligns vertically */
  display: grid;
  grid-template-columns: 10px 58px 140px 2px 40px;
  grid-template-rows: 58px;
  grid-template-areas: 
  "m2a m2i m2c m2sp m2ric";  
`

const M2a = styled.div`
  grid-area: m2a;
  background-color:  ${props => props.exp ? '#007079;' : '#243746;'}  
`

const M2i = styled.div`
  grid-area: m2i;
  background-color: #243746;

  ${MenuLevel2container}: hover & {
    background-color: #132634;   
  }
`

const M2c = styled.div`
  grid-area: m2c;
  background-color: #243746;
  
  ${MenuLevel2container}: hover & {
    background-color: #132634;   
  }
`

const M2sp = styled.div`
  grid-area: m2sp;
  background-color: #132634;
`

const M2ric = styled.div`
  grid-area: m2ric;
  background-color: #243746;

  ${MenuLevel2container}: hover & {
    background-color: #132634;   
  }
`

const IconM2L = styled.span`
    color: #C68600;
    font-size: 20px; 
    vertical-align: middle; 
    text-align: center; 
    width: 58px;
 `

const IconM2R = styled.span`
    font-size: 20px; 
    vertical-align: middle; 
    text-align: center; 
    width: 40px;
 `

/* Sjå her: https://spectrum.chat/styled-components/general/dynamically-change-size-for-fontawesome-icons-using-styled-components-and-nextjs~5b68c8de-6f40-4e84-9109-3654e865721d */
const MenuLevel2Component = props => {

  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <MenuLevel2container onClick={() => setExpanded(!expanded)}>
        <M2a exp={expanded}></M2a>
        <M2i><IconM2L className="fa fa-star-o icon-orange"></IconM2L></M2i>
        <M2c>{props.caption}</M2c>
        <M2sp></M2sp>
        <M2ric>{expanded ? <IconM2R className="fa fa-folder-open-o"></IconM2R> : <IconM2R className="fa fa-folder-o"></IconM2R>}</M2ric>
      </MenuLevel2container>

      {expanded && <div>{props.children}</div>}
    </div>
  )
}

export default MenuLevel2Component