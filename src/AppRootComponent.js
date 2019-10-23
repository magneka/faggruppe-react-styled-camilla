import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import MainMenu from './components/Menus/mainMenu';

import MenuSpacer from './components/layoutComponents/menuSpacer';
import BlankTop from './components/layoutComponents/blankTop';
import FooterArea from './components/layoutComponents/footerArea';
import BurgerArea from './components/layoutComponents/burgerArea';
import MenuArea from './components/layoutComponents/menuArea';

import TripleExample1 from './pages/TriplePages/tripleExample1'
import TripleExample2 from './pages/TriplePages/tripleExample2'
import TripleExample3 from './pages/TriplePages/tripleExample3'

import  SingleLorumExample  from "./pages/SinglePages/lorumExample";
import  EnglishExample  from "./pages/SinglePages/englishExample";
import  SingleTableExample  from "./pages/SinglePages/tableExample";
import  GraphExample01  from "./pages/SinglePages/graphExample01";

import styled from 'styled-components'

const RootDiv = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  display: grid;
  background-color: #132634;
  grid-template-columns: ${props => props.menuWidth}; 
  grid-template-rows: minmax(68px, 68px) 2.4fr  minmax(68px, 68px);
  grid-template-areas: 
    "menuSpacer blankTop blankTop"  
    "MenuArea ContentArea BurgerArea" 
    "MenuArea FooterArea BurgerArea";
`

const AppRootComponent = props => {

  const hiddenmenuTemplate = 'minmax(0px, 0px) 2.4fr minmax(22px, 22px)';
  const visibleMenuTemplate = 'minmax(250px, 250px) 2.4fr minmax(22px, 22px)';

  const [showMenu, setShowMenu] = useState(true);
  
  return (
    <RootDiv menuWidth={showMenu ? visibleMenuTemplate : hiddenmenuTemplate}>

      <Router>
        <MenuSpacer></MenuSpacer>
        <BlankTop></BlankTop>

        <MenuArea>
          {showMenu ? <MainMenu /> : ''}
        </MenuArea>

        <Switch>
          <Route exact path="/" component={SingleLorumExample} />
          
          <Route path="/tripleExample1" component={TripleExample1} />
          <Route path="/tripleExample2" component={TripleExample2} />
          <Route path="/tripleExample3" component={TripleExample3} />

          <Route path="/lorumExample" component={SingleLorumExample} />
          <Route path="/lorumEnglishExample" component={EnglishExample} />
          <Route path="/tableExample" component={SingleTableExample} />
          <Route path="/graf01" component={GraphExample01} />
        </Switch>

        <BurgerArea toggleMenu={() => setShowMenu(!showMenu)}></BurgerArea>
        <FooterArea></FooterArea>

      </Router>
    </RootDiv>
  )
}

export default AppRootComponent