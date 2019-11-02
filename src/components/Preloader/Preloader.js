import React from 'react';
import  './preloader.scss';
import preloader from '../../img/preloader.svg';
const Preloader = ()=>{
    return(
            <img className="preloader" alt="preloader" src ={preloader}></img>
       
    )
}
export default Preloader;