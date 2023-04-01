const Persons = ({personsToShow, deletePersonHandler}) => {
  return (
    <table>
      <tbody>
        {personsToShow.map(
          person => 
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.number}</td>
              <td>
                <button onClick={() => deletePersonHandler(person)}>delete</button>
              </td>
            </tr>
        )}
      </tbody>
    </table>
  )
}

export default Persons