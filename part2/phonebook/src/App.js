import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/personsDB'

const App = () => {
  const [persons, setPersons] = useState([]) 
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
      const person = persons.find(x => x.name.toLowerCase() === newName.toLowerCase())
      if (person.number === newNumber) {
        alert(`Nothing to update. ${newName} already exists with number ${newNumber}`)
      } else {
        if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
          const changedPerson = { ...person, number: newNumber }
          personService
          .update(person.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(n => n.id !== person.id? n : returnedPerson))
          })
        }
      }
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

  const deletePersonHandler = (person) => {
    if (window.confirm(`Really delete ${person.name}?`)) {
      personService
      .deleteEntry(person.id)
      .then(_ => setPersons(persons.filter(n => n.id !== person.id)))
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

      <Persons personsToShow={personsToShow} deletePersonHandler={deletePersonHandler} />
    </div>
  )
}



export default App
