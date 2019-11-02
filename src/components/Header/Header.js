import React from 'react';
import  './header.scss';
import Nav from './Nav/Nav';
import RandomPlanetContainer from './RandomPlanet/RandomPlanetContainer';
 class Header extends React.Component{
     render(){
         return(
             <header>
                <Nav/>
                <RandomPlanetContainer/>
             </header>
         )
     }
 }
 export default Header;