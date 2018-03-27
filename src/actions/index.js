import axios from 'axios'

const API_KEY = '55c5f1d9aa5ae7a96037c4f3b319da7a'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},br`
    const request = axios.get(url)
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}