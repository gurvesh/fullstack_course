import { useState, useEffect } from "react"
import Filter from "./components/Filter"
import Countries from "./components/Countries"
import Country from "./components/Country"
import countryService from './services/countriesDB'

const App = () => {
  const [countries, setCountries] = useState([])
  // const [countriesToShow, setCountriesToShow] = useState([])
  const [country, setCountry] = useState(null)
  const [filteringString, setNewFilteringString] = useState('')

  useEffect(() => {
    countryService
      .getAll()
      .then(fullData => setCountries(fullData))
  }, [])

  const handleFilter = (event) => {
    setNewFilteringString(event.target.value)
    setCountry(null)
  }

  const countriesToShow = countries.filter(
    country => 
      country.name.common
      .toLowerCase()
      .includes(
        filteringString.toLowerCase()
      )
  )

  const handleShowCountry = (country) => setCountry(country)
  
  return (
    <div>
      <h2>Countries app</h2>
      <Filter filteringString={filteringString} handleFilter={handleFilter} />
      {country
        ? <Country country={country} /> 
        : <Countries countriesToShow={countriesToShow} handleShowCountry={handleShowCountry}/>}
    </div>
  )
}

export default App;
