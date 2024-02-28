import './App.css'
import CardsPreview from './components/CardsPreview'
import searchSvg from "./assets/icons8-search.svg"
import WeatherDetails from './components/WeatherDetails'
function App() {

  function onChange() {}
  return (
    <>
      <main>
        <div className="input-container">
          <input type="text" placeholder='Search a place'/>
          <button><img src={searchSvg} /></button>
        </div>
        <CardsPreview /> 
        <WeatherDetails />
      </main>
    </>
  )
}

export default App
