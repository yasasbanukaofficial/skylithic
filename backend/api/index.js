import fetchWeather from "../backend/services/weather.service.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { city } = req.query;

  try {
    const data = await fetchWeather(city);

    if (!data) {
      return res.status(400).json({
        success: false,
        message: "Error when fetching weather data",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Weather details have been fetched",
      data,
    });
  } catch (error) {
    let statusCode = 500;
    let errorMsg = "An internal server error has occured.";

    if (error.message.includes("City not found")) {
      statusCode = 404;
      errorMsg = `City ${city} not found. Please try another location!`;
    } else {
      statusCode = 502;
      errorMsg = "External API temporarily unavailable.";
    }

    return res.status(statusCode).json({
      success: false,
      message: errorMsg,
    });
  }
}
