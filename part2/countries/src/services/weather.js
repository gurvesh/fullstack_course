import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY
const geoBaseUrl = "http://api.openweathermap.org/geo/1.0/direct?q="
const weatherBaseUrl = "https://api.openweathermap.org/data/2.5/weather?"

const getCoords = ({capital, countryCode}) => {
  const request = axios.get(`${geoBaseUrl}${capital},${countryCode}&appid=${api_key}`)
  return request.then(response => [response.data[0].lat, response.data[0].lon])
}

const getWeather = ([lat, lon]) => {
  const request = axios.get(`${weatherBaseUrl}lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
  return request.then(response => [response.data])
}

export default{ getCoords, getWeather }