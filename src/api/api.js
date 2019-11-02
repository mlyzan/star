import * as axios from 'axios';
let instance = axios.create({
    baseURL: "https://swapi.co/api/"
});
export const getPlanet = (id)=>{
    return instance.get(`planets/${id}`).then((response)=>{
       return response.data
    })
}
export const getAllPlanets = ()=>{
    return instance.get(`planets`).then((response)=>{
       return response.data
    })
}
export const getPeople = ()=>{
    return instance.get(`people`).then((response)=>{
        return response.data
     })
}
export const getPerson = (id)=>{
    return instance.get(`people/${id}`).then((response)=>{
        return response.data
     })
}
export const getAllStarships = ()=>{
    return instance.get(`starships`).then((response)=>{
       return response.data
    })
}
export const getStarship = (id)=>{
    return instance.get(`starships/${id}`).then((response)=>{
       return response.data
    })
}