import fetchWeather from "../services/weather.service.js";

const search = async (req, res, next) => {
  const data = await fetchWeather("Colombo");
  res.status(200).json({
    success: true,
    message: "Weather details have been fetched",
    data: data,
  });
  next();
};

export default search;
