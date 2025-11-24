import { WEATHER_API_URL } from "../config/env.js";
import dataFormatter from "../utils/dataFormatter.utils.js";

const fetchWeather = async (query) => {
  try {
    const resp = await fetch(`${WEATHER_API_URL}/${query}`);

    if (!resp.ok) {
      throw new Error(`External API Error: Status ${resp.status}`);
    }

    const rawData = await resp.json();

    if (!rawData.temperature || !rawData.description) {
      throw new Error("City not found or data structure is invalid.");
    }
    return dataFormatter(rawData, query);
  } catch (error) {
    throw error;
  }
};

export default fetchWeather;
