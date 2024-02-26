import './App.css'
import CardsPreview from './components/CardsPreview'
import searchSvg from "./assets/icons8-search.svg"
function App() {

  function onChange() {}
  return (
    <>
      <main>
        <div className="input-container">
          <input type="text" placeholder='Search a place'/>
          <img src={searchSvg} />
        </div>
        <CardsPreview /> 
      </main>
    </>
  )
}

export default App
