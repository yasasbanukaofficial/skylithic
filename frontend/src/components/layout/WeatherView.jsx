import React, { useState } from "react";
import { RangeCard } from "../modules/RangeCard";

export const WeatherView = ({ temperature, condition }) => {
  const [range, setRange] = useState("H");

  return (
    <div className="flex flex-col">
      <div className="flex flex-1 align-middle">
        <h1 className="text-7xl flex-2/3 font-logo">{temperature}</h1>
        <div className="mt-1 flex flex-col flex-1/3 gap-2">
          <RangeCard temperature={temperature} range={range} />
          <RangeCard temperature={temperature} range={range} />
        </div>
      </div>
      <h1 className="h-60 flex items-center justify-start text-6xl/17 text-normal text-white/30 font-description max-w-125">
        {condition}
      </h1>
    </div>
  );
};
