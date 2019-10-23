import React from 'react'
import MenuLevel1Component from '../layoutComponents/menuLevel1Component';
import MenuLevel2Component from '../layoutComponents/menuLevel2Component';
import MenuLevel3Component from '../layoutComponents/menuLevel3Component';

const MainMenu = () => 
  <div>
    <MenuLevel1Component caption="Main menu" icon='fa-spotify'>
      <MenuLevel2Component caption='Triple Containers'>
        <MenuLevel3Component caption="TripleEx1" cto="/tripleExample1" />
        <MenuLevel3Component caption="TripleEx2" cto="/tripleExample2" />
        <MenuLevel3Component caption="TripleEx3" cto="/tripleExample3" />
      </MenuLevel2Component>

      <MenuLevel2Component caption='Single Containers' >
        <MenuLevel3Component caption="Lorum" cto="/lorumExample" />
        <MenuLevel3Component caption="Engelsk Lorum" cto="/lorumEnglishExample" />
        <MenuLevel3Component caption="Data Tabell" cto="/tableExample" />
        <MenuLevel3Component caption="Grafikk" cto="/graf01" />
      </MenuLevel2Component>
    </MenuLevel1Component>

    <MenuLevel1Component caption="Settings" icon='fa-circle-thin'>
      <MenuLevel2Component caption='Third submenu'>
        <MenuLevel3Component caption="Home" cto="/" />
      </MenuLevel2Component>
    </MenuLevel1Component>
  </div>

export default MainMenu