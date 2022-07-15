import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import RandomBeers from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import Beers from './pages/Beers';
import BeersDetail from './pages/BeersDetail'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/beers" element={<Beers/>}></Route>
      <Route path="/beers/:beerId" element={<BeersDetail/>}></Route>
      <Route path="/random-beer" element={<RandomBeers />}></Route>
      <Route path="/new-beer/" element={<NewBeer/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
