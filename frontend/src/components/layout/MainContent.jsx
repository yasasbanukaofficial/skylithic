import React, { useEffect, useState } from "react";
import { GeoHeader } from "./GeoHeader";
import { WeatherView } from "./WeatherView";
import { SearchCard } from "../modules/SearchCard";
import { WeatherCard } from "../modules/WeatherCard";
import { DayWeatherView } from "../modules/DayWeatherView";

export const MainContent = ({ handleSearch, weather }) => {
  const [location, setLocation] = useState("");
  const [temp, setTemp] = useState("");
  const [condition, setCondition] = useState("");
  const [forecasts, setForecasts] = useState([
    {
      label: "",
      temp: "0",
      wind: "0",
    },
  ]);

  useEffect(() => {
    if (weather && weather.current) {
      setLocation(weather.current.location);
      setTemp(weather.current.temp + "°C");
      setCondition(weather.current.condition);
      setForecasts(weather.forecastCards);
    }
  }, [weather]);

  return (
    <div className="flex-2/4 right-section py-6 flex flex-col h-full gap-10">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col gap-9 flex-1">
          <SearchCard onSearch={handleSearch} />
          <GeoHeader location={location || "Location"} />
          <WeatherView
            temperature={temp || "+0°C"}
            condition={condition || "Nothing unusual"}
          />
        </div>
      </div>
      <div className="flex-2/4 flex gap-10 pt-2 lg:pt-20">
        {forecasts.map((dayData, index) => (
          <DayWeatherView
            key={`day-${index}`}
            label={dayData.label}
            temp={dayData.temp + "°C"}
            wind={dayData.wind + "km/h"}
          />
        ))}
      </div>
    </div>
  );
};
