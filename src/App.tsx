import './App.css'
import CardsPreview from './components/CardsPreview'
import searchSvg from "./assets/icons8-search.svg"
import WeatherDetails from './components/WeatherDetails'
import { useState } from 'react'
function App() {
  const [place, setPlace] = useState('')
  console.log(place)
  
  function handleInput(e: Event) {
    setPlace(e.target.value)
  }

  

  return (
    <>
      <main>
        <div className="input-container">
          <input type="text" placeholder='Search a place' onChange={handleInput}/>
          <button><img src={searchSvg} /></button>
        </div>
        <CardsPreview /> 
        <WeatherDetails />
      </main>
    </>
  )
}

export default App
