import { WEATHER_API_URL } from "../config/env.js";

const fetchWeather = async (query) => {
  const resp = await fetch(`${WEATHER_API_URL}/${query}`);
  const rawData = await resp.json();

  return rawData;
};

export default fetchWeather;
