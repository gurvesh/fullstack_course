const Persons = ({personsToShow}) => {
  return (
    <table>
      <tbody>
        {personsToShow.map(
          person => 
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.number}</td>
            </tr>
        )}
      </tbody>
    </table>
  )
}

export default Persons