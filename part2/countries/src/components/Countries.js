import Country from "./Country"

const Countries = ({countriesToShow, handleShowCountry}) => {
  if (countriesToShow.length > 10) return ("Too many matches, specify another filter")
  
  else return (
    <table>
      <tbody>
        {countriesToShow.map(
          country => 
            <tr key={country.name.common}>
              <td>{country.name.common}</td>
              <td>
                <button onClick={() => handleShowCountry(country)}>show</button>
              </td>
            </tr>
        )}
      </tbody>
    </table>
  )
}

export default Countries