import React from 'react'
import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'

const MenuLevel3Container = styled.div`
  color: white;
  background-color: #243746;   
  line-height: 38px; /* aligns vertically */
  display: grid;
  grid-template-columns: 68px 182px;
  grid-template-rows: 38px;
  grid-template-areas: 
  "m3sp m3c";
`

const M3sp = styled.div`
  grid-area: m3sp;

  ${MenuLevel3Container}: hover & {
    background-color: #132634;   
  }
`

const M3c = styled.div`
  grid-area: m3c; 
   font-size: 14px;

   ${MenuLevel3Container}: hover & {
    background-color: #132634;   
  }
`

const MyNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  
  &.active {
    text-decoration: none;
    color: #C68600;
  };
  &.visited {
    text-decoration: none;
    color: white !Important;
  };
  &.link {
    text-decoration: none;
    color: white !Important; 
  };
`

const MenuLevel3Component = props => (
  <div>
    <MenuLevel3Container>
      <M3sp></M3sp>
      <MyNavLink exact activeClassName="active" to={props.cto}>
        <M3c>{props.caption}
        </M3c>
      </MyNavLink>
    </MenuLevel3Container>
  </div>
)

export default MenuLevel3Component