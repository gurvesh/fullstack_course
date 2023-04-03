import Country from "./Country"

const Countries = ({countriesToShow}) => {
  if (countriesToShow.length > 10) return ("Too many matches, specify another filter")
  
  else if (countriesToShow.length === 1) {
    // console.log("Country: ", countriesToShow[0].name.common)
    return (
      <Country country={countriesToShow[0]} />
  )}

  else return (
    <table>
      <tbody>
        {countriesToShow.map(
          country => 
            <tr key={country.name.common}>
              <td>{country.name.common}</td>
            </tr>
        )}
      </tbody>
    </table>
  )
}

export default Countries