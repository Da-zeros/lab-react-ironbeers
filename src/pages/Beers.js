import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import axios from 'axios'

const Beers = () => {

  const [beersArray, setBeersArray] = useState([])
  
  useEffect(()=>{
    
    const geetApiData = async () =>{

      const apiUri = "https://ih-beers-api2.herokuapp.com/beers"
      const beersData = await axios.get(apiUri)
      setBeersArray(beersData.data)
    }
    geetApiData()
  },[])

  useEffect(()=>{
    console.log(beersArray)
  })
  
  return (
    <>
      <Link to="/">
        <i className="fa-solid fa-house-chimney"></i>
      </Link>
      <ul>
      {
        beersArray && beersArray.map(beer=>
          
          <li className="beerContent">
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} alt=""/>
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p>{beer.contributed_by}</p>
            </Link>
          </li>
          )
      }
    </ul>
    </>
  )
}

export default Beers