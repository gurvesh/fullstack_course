import { useState, useEffect } from "react"
import Filter from "./components/Filter"
import Countries from "./components/Countries"
import axios from "axios"
import countryService from './services/countriesDB'

const App = () => {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('')
  const [filteringString, setNewFilteringString] = useState('')

  useEffect(() => {
    countryService
      .getAll()
      .then(fullData => setCountries(fullData))
  }, [])

  const handleFilter = (event) => {
    setNewFilteringString(event.target.value)
  }

  const countriesToShow = countries.filter(
    country => 
      country.name.common
      .toLowerCase()
      .includes(
        filteringString.toLowerCase()
      )
  )
  
  return (
    <div>
      <h2>Countries app</h2>
      <Filter filteringString={filteringString} handleFilter={handleFilter} />
      <Countries countriesToShow={countriesToShow} />
    </div>
  )
}

export default App;
