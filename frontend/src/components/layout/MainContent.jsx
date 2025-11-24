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
      temp: "0°C",
      wind: "0km/h",
    },
  ]);

  useEffect(() => {
    if (weather && weather.current) {
      setLocation(weather.current.location);
      setTemp(weather.current.temp);
      setCondition(weather.current.condition);
      setForecasts(weather.forecastCards);
    }
  }, [weather]);

  return (
    <div className="flex-2/4 right-section py-6 flex flex-col h-full gap-10">
      <div className="flex flex-row">
        <div className="flex flex-col gap-9 flex-1">
          <GeoHeader location={location || "Location"} />
          <WeatherView
            temperature={temp || "+0 °C"}
            condition={condition || "Nothing unusual"}
          />
        </div>
        <div className="flex-1 flex flex-col align-middle items-end gap-12">
          <SearchCard onSearch={handleSearch} />
          <p className="max-w-85 text-justify">
            Note: The data provide here might be slightly inaccurate but it is
            somewhat similar to the real data.
          </p>
          <div className=" flex flex-col gap-2">
            <p className="text-white/30">Recently Searched</p>
            <div className="flex gap-2">
              <WeatherCard />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-2/4 flex gap-10 pt-20">
        {forecasts.map((dayData, index) => (
          <DayWeatherView
            key={`day-${index}`}
            label={dayData.label}
            temp={dayData.temp}
            wind={dayData.wind}
          />
        ))}
      </div>
    </div>
  );
};
