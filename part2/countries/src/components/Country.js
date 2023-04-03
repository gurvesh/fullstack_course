const Country = ({country}) => {
  const langs = []
  for (const [key, lang] of Object.entries(country.languages)) {
    langs.push(lang)
  }
  return (
    <div>
      <h2>{country.name.common}</h2>
      <div>capital: {country.capital[0]}</div>
      <div>area: {country.area}</div>
      <div>
        <h4> languages:</h4>
        <ul>
          {langs.map(lang => <li key={lang}>{lang}</li>)}
        </ul>
      </div>
      <div><img src={country.flags.png} width={150} /></div>
    </div>
  )
}

export default Country