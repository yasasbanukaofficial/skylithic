import fetchWeather from "../../backend/services/weather.service.js";

export default async function handler(req, res) {
  try {
    const city = req.query.city;
    const data = await fetchWeather(city);

    if (!data) {
      return res.status(400).json({
        success: false,
        message: "Error when fetching weather data",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Weather details fetched",
      data: data,
    });
  } catch (error) {
    let statusCode = 500;
    let errorMsg = "An internal server error has occurred.";

    if (error.message.includes("City not found")) {
      statusCode = 404;
      errorMsg = `City ${req.query.city} not found.`;
    } else {
      statusCode = 502;
      errorMsg = "Service temporarily unavailable due to external API issues.";
    }

    return res.status(statusCode).json({
      success: false,
      message: errorMsg,
    });
  }
}
