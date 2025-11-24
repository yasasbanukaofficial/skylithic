import fetchWeather from "../services/weather.service.js";

const search = async (req, res, next) => {
  try {
    const query = req.params["city"];
    const data = await fetchWeather(query);

    if (!data) {
      res.status(400).json({
        success: false,
        message: "Error when fetching weather data",
      });
    }

    res.status(200).json({
      success: true,
      message: "Weather details have been fetched",
      data: data,
    });
    next();
  } catch (error) {
    let statusCode = 500;
    let errorMsg = "An internal server error has occured.";

    if (error.message.includes("City not found")) {
      statusCode = 404;
      errorMsg = `City Colombo not found. Please try another location!`;
    } else {
      statusCode = 502;
      errorMsg = "Service temporarily unavailable due to external API issues.";
    }

    res.status(statusCode).json({
      success: false,
      message: errorMsg,
    });
    next(error);
  }
};

export default search;
