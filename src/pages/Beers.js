import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import axios from 'axios'

const Beers = () => {

  const apiUri = "https://ih-beers-api2.herokuapp.com/beers"
  const filter = "/search?q="
  
  const [filteredBeersArray, setFilteredBeersArray] = useState([])
  const [query, setQuery] = useState("")

  const filterHandleChange = (event) =>{
    setQuery(event)
  }

  useEffect(()=>{
      const geetApifilterData = async () =>{
      const filterdata = await axios.get(apiUri+filter+query)
      setFilteredBeersArray(filterdata.data)}

      geetApifilterData()
  },[query])
  
  return (
    <>
      <Header/>
     <div className="searchBar">
        <p>Looking for a special one? search it!</p>
        <input
          name="query" 
          onChange={(e)=>filterHandleChange(e.target.value)} 
          type="text"/>
     </div>

      <ul>
      {
        filteredBeersArray && filteredBeersArray.map(beer=>
          
          <li className="lista" key={beer._id}>
            <Link className="beerContent" to={`/beers/${beer._id}`}>
              <div className="beerContent_image">
                <img src={beer.image_url} alt=""/>
              </div>
             <div className="beerContent_tags">
                <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
                <p><span class="beerContent_bolder">Contributed by:</span>{beer.contributed_by}</p>
             </div>
             
            </Link>
          </li>
          )
      }
    </ul>
    </>
  )
}

export default Beers