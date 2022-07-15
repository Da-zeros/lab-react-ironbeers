import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'

const RandomBeer = () => {

  const [randomBeer, setrandomBeer] = useState({})
  
  useEffect(()=>{
    
    const geetApiRandom = async () =>{

      const apiUri = "https://ih-beers-api2.herokuapp.com/beers/random"
      const beersRandom = await axios.get(apiUri)
      setrandomBeer(beersRandom.data)
    }
    geetApiRandom ()
  },[])

  useEffect(()=>{
    console.log(randomBeer)
  })
  return (
    <>
    <Header/>
    <div className="cardDetail">
        <img src={randomBeer.image_url}/>
        <h3>{randomBeer.name}</h3>
        <p>{randomBeer.tagline}</p>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
    </div>
    </>)
}

export default RandomBeer