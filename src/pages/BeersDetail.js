import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/Header'



const BeersDetail = () => {

    const {beerId} = useParams()
    const [detailBeer, setdetailBeer] = useState([])
  
  useEffect(()=>{
    
    const geetApiDataDetail = async () =>{

      const apiUri = "https://ih-beers-api2.herokuapp.com/beers/"
      const beersDataDetail = await axios.get(apiUri+beerId)
      setdetailBeer(beersDataDetail.data)
    }
    geetApiDataDetail()
  },[])

  useEffect(()=>{
    console.log(detailBeer)
  })
  return (
    <>
    <Header/>
    <div className="cardDetail">
        <img src={detailBeer.image_url}/>
        <h3>{detailBeer.name}</h3>
        <p>{detailBeer.tagline}</p>
        <p>{detailBeer.first_brewed}</p>
        <p>{detailBeer.attenuation_level}</p>
        <p>{detailBeer.description}</p>
        <p>{detailBeer.contributed_by}</p>
    </div>
    </>
  )
}

export default BeersDetail