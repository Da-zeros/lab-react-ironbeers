import React from 'react'
import { Link } from 'react-router-dom'
import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'


function Home() {
  return (
    <div className="homeContainer">
    
        <Link to="beers">
            <div className="homeContainer-Card">
                <img src={beers} alt=""/>
                <h3>Beers</h3>
                <p>Beers beers muchas beers</p>
            </div>
        </Link>
    
        <Link to="random-beer">
            <div className="homeContainer-Card">
                <img src={randomBeer} alt="alo"/>
                <h3>Random Beers</h3>
                <p>Beers beers muchas beers</p>
            </div>
        </Link>
        <Link to="new-beer">
            <div className="homeContainer-Card">
                <img src={newBeer} alt=""/>
                <h3>New Beer</h3>
                <p>Beers beers muchas beers</p>
            </div>
        </Link>
        
    </div>
  )
}

export default Home