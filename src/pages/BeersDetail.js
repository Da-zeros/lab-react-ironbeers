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
      <div className="detailContainer">
      <Header className="homeIcon"/>
      <div className='cardDetail'>
        <img src={detailBeer.image_url}/>
        <div className="cardDetail-cont">
          <div className="cardDetail-cont_left">
            <h3>{detailBeer.name}</h3>
            <p className="cardDetail-cont_rigthBig">{detailBeer.tagline}</p>
          </div>
          <div className="cardDetail-cont_rigth">
            <p className="cardDetail-cont_rigthBig">{detailBeer.attenuation_level}</p>
            <p className="biger">{detailBeer.first_brewed}</p>
          </div>
        </div>
        <p className="biger">{detailBeer.description}</p>
        <p className="grey">{detailBeer.contributed_by}</p>
      </div>
      </div>
     
      </>

  )
}

export default BeersDetail