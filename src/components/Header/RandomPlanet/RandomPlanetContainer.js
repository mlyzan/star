import React from 'react';
import RandomPlanet from './RandomPlanet';
import Error from '../../Error/Error';
import Preloader from '../../Preloader/Preloader';
import {getPlanet} from '../../../api/api';
 class RandomPlanetContainer extends React.Component{
     state={
         name: null,
         diameter: null,
         population: null,
         rotation_period: null,
         id: null,
         error: false,
         preloader: true
     }
     componentDidMount(){
        this.showRandomPlanet()
        this.interval = setInterval(this.showRandomPlanet, 7000)
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    showRandomPlanet =()=>{
        let random = Math.ceil(Math.random()*10);
        getPlanet(random).then((data)=>{
            this.setState((state)=>{
                return{
                    ...state,
                    name: data.name,
                   diameter: data.diameter,
                  population: data.population,
                  rotation_period: data.rotation_period,
                  id: random,
                  preloader: false
                }
            })
       }).catch(this.onError)
    }
    onError= ()=>{
        this.setState((state)=>{
            return{
                ...state,
                error: true,
                preloader: false
            }
        })
    }
    whatRender = ()=>{
        if(this.state.preloader){
            return <Preloader/>
        } else if(this.state.error && this.state.preloader === false){
            return <Error/>
        }else if(!this.state.error && this.state.preloader === false){
            return  <RandomPlanet state={this.state}/>
        }
    }
     render(){
         return(
           <ul>{this.whatRender()}</ul>
         )
     }
 }
 export default RandomPlanetContainer;