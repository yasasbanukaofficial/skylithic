import React, { useState } from "react";
import { RangeCard } from "../modules/RangeCard";

export const WeatherView = () => {
  const [temperature, setTemperature] = useState("18°");
  const [range, setRange] = useState("H");
  const [weatherDescription, setweatherDescription] = useState(
    "Stormy with party cloudy"
  );

  return (
    <div className="flex flex-col">
      <div className="flex flex-1 align-middle">
        <h1 className="text-7xl flex-1/3 font-logo">{temperature}</h1>
        <div className="mt-1 flex flex-col flex-2/3 gap-2">
          <RangeCard temperature={temperature} range={range} />
          <RangeCard temperature={temperature} range={range} />
        </div>
      </div>
      <h1 className="h-60 flex items-end justify-start text-6xl/17 text-normal text-white/30 font-description max-w-125">
        {weatherDescription}
      </h1>
    </div>
  );
};
