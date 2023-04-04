const Weather = ({weather}) => {
  return (
    <div>
      <div>temperature: {weather[0].main.temp} Celcius</div>
      <div><img src={`https://openweathermap.org/img/wn/${weather[0].weather[0].icon}@2x.png`} /></div>
      <div>wind: {weather[0].wind.speed} m/s</div>
    </div>
  )
}

export default Weather