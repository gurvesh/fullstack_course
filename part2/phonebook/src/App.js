import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

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
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
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
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
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
