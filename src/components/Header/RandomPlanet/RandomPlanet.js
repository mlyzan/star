import React from 'react';
import './randomPlanet.scss';
const RandomPlanet = (props)=>{
    let {id, name, diameter, population, rotation_period} = props.state;
    return(
        <section className="container random_planet">
            <div className="jumbotron row random_block">
                <div className="col-12 col-lg-5"> 
                    <img className="img_random" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet-icon"></img> 
                </div>
                <div className="col-12 col-lg-7">
                    <h1 className="display-7">{name}</h1>
                    <span className="lead">Population {population} </span>
                    <hr className="my-2"></hr>
                    <span className="lead">Rotation period {rotation_period}</span>
                    <hr className="my-2"></hr>
                    <span className="lead">Diameter {diameter}</span>
                </div>
            </div>
        </section>
    )
}
export default RandomPlanet;