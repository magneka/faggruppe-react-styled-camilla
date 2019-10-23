import React, { useState } from 'react'
import styled from 'styled-components'

const MenuLevel1container = styled.div`
  color: white;
  margin-top: 4px; 
  line-height: 77px; /* aligns vertically */
  display: grid;
  grid-template-columns: 10px 58px 182px;
  grid-template-rows: 77px;
  grid-template-areas: 
  "m1a m1i m1c";
`

const M1a = styled.div`
  grid-area: m1a;
  background-color: ${props => props.sel ? '#007079;' : '#243746;'}

  ${MenuLevel1container}: hover & {
    background-color: ${props => props.sel ? '#007079;' : '#132634;'}
  }
`

const M1i = styled.div`
  grid-area: m1i;
  padding-left: 0px;
  background-color: ${props => props.sel ? '#007079;' : '#243746;'}
  
  ${MenuLevel1container}: hover & {
    background-color: ${props => props.sel ? '#007079;' : '#132634;'}
  }
`

const M1c = styled.div`
  grid-area: m1c;
  background-color: #243746;
   background-color: ${props => props.sel ? '#007079;' : '#243746;'}
  
  ${MenuLevel1container}: hover & {
    background-color: ${props => props.sel ? '#007079;' : '#132634;'}
  }
`

const IconM1 = styled.span`
  color: #D22020;  
  font-size: 40px; 
  vertical-align: middle; 
  text-align: center; 
  width: 58px;
`

/*
 todo Ikoner og litt snacs er deklarert i global CSS, finn ut hvordan du kan ta det inn her
 Sjå her: https://spectrum.chat/styled-components/general/dynamically-change-size-for-fontawesome-icons-using-styled-components-and-nextjs~5b68c8de-6f40-4e84-9109-3654e865721d
*/

/* Denne fargen når ekspandert dvs submenuVisible == true */
const MenuLevel1Component = props => {

  const [submenuVisible, setVisible] = useState(false);

  return (
    <div>
      <MenuLevel1container onClick={() => setVisible(!submenuVisible)} sel={submenuVisible}>
        <M1a sel={submenuVisible}></M1a>
        <M1i sel={submenuVisible}><IconM1 className={`fa ${props.icon}`}></IconM1></M1i>
        <M1c sel={submenuVisible}>{props.caption}</M1c>
      </MenuLevel1container>

      {submenuVisible && <div>{props.children}</div>}

    </div>
  )
}

export default MenuLevel1Component