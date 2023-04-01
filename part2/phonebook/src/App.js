import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    // { name: 'Arto Hellas', number: '040-123456', id: 1 },
    // { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    // { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    // { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteringString, setNewFilteringString] = useState('')

  useEffect(() => {
    console.log('effect');
    axios
      .get('http://localhost:4000/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName, 
      number: newNumber, 
      id: persons.length + 1}
    // console.log(persons);
    if (persons.some(x => x.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      axios
        .post('http://localhost:4000/persons', newPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const personsToShow = persons.filter(
    person => 
      person.name
      .toLowerCase()
      .includes(
        filteringString.toLowerCase()
      )
  )

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setNewFilteringString(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filteringString={filteringString} handleFilter={handleFilter} />

      <h3>add a new</h3>

      <PersonForm
        submitHandler={addPerson}
        newName={newName}
        newNameHandler={handleNewName}
        newNumber={newNumber}
        newNumberHandler={handleNewNumber}
      />

      {/* <div>debug: {newName}</div> */}
      <h3>Numbers</h3>

      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App
