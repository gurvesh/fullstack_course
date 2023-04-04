import { useState, useEffect } from "react"
import Filter from "./components/Filter"
import Countries from "./components/Countries"
import Country from "./components/Country"
import Weather from "./components/Weather"
import countryService from './services/countriesDB'
import weatherService from './services/weather'

const App = () => {
  const [countries, setCountries] = useState(null)
  const [countriesToShow, setCountriesToShow] = useState([])
  const [country, setCountry] = useState(null)
  const [filteringString, setNewFilteringString] = useState('')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    if (!countries) {
      countryService
        .getAll()
        .then(fullData => {
          setCountries(fullData)
          setCountriesToShow(fullData)
        })
    }
    if (country) {
      // console.log('Fetching weather data')
      weatherService
      .getCoords({capital: country.capital[0], countryCode: country.cca2})
      .then(response => weatherService.getWeather(response))
      .then(response => setWeather(response))
      // .then(_ => console.log(weather))
    }
  }, [country])

  const handleFilter = (event) => {
    const newFilter = event.target.value
    setNewFilteringString(newFilter)
    
    const newCountriesToShow = countries.filter(
      country => 
        country.name.common
        .toLowerCase()
        .includes(newFilter.toLowerCase())
    )
    setCountriesToShow(newCountriesToShow)

    if (newCountriesToShow.length === 1) {
       setCountry(newCountriesToShow[0])
    } else {
      setCountry(null)
      setWeather(null)
    }
  }

  const handleShowCountry = (country) => setCountry(country)
    
  return (
    <div>
      <h2>Countries app</h2>
      <Filter filteringString={filteringString} handleFilter={handleFilter} />
      {country
        ? <Country country={country}/> 
        : <Countries countriesToShow={countriesToShow} handleShowCountry={handleShowCountry}/>}
      {weather
        ? <Weather weather={weather} />
        : <></>}
    </div>
  )
}

export default App;
