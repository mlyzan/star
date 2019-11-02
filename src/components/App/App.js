import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import './app.scss';
import Header from '../Header/Header';
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemList from '../ItemList/ItemList';
import {getPeople, getAllPlanets, getAllStarships, getPerson, getPlanet, getStarship} from '../../api/api';
class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/" exact render={()=> <h1 className="text-center"> Welcome to Star Worlds</h1>}/>
                    <div className="row container center">
                            <Route path="/people" render={()=> <ItemList getData={getPeople}/>} />
                          <Route path='/people/:id' render={()=> <ItemDetail 
                                                                    getData={getPerson}
                                                                    img={()=> "characters" }
                                                                    descr1={(data)=> `Gender ${data.gender} `}
                                                                    descr2={(data)=> `Birth Year ${data.birth_year}`}
                                                                    descr3={(data)=> `Eye color ${data.eye_color}`} />} />  
                    </div>
                    <div className="row container center">
                             <Route path='/planets' render={()=> <ItemList getData={getAllPlanets}/>} />
                        <Route path='/planets/:id' render={()=> <ItemDetail 
                                                                    getData={getPlanet}
                                                                    img={()=> "planets"}
                                                                    descr1={(data)=> `Diameter ${data.diameter}`}
                                                                    descr2={(data)=> `Population ${data.population}`}
                                                                    descr3={(data)=> `Rotation period ${data.rotation_period}`} />} /> 
                    </div>
                    <div className="row container center">
                             <Route path='/starships' render={()=> <ItemList getData={getAllStarships}/>} />
                        <Route path='/starships/:id' render={()=> <ItemDetail 
                                                                    getData={getStarship}
                                                                    img={()=> "starships"}
                                                                    descr1={(data)=> `Model ${data.model}`}
                                                                    descr2={(data)=> `Passengers ${data.passengers}`}
                                                                    descr3={(data)=> `Length ${data.length}`}  />} /> 
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
export default App;