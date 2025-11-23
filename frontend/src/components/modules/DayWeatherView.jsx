import React from "react";

export const DayWeatherView = () => {
  return (
    <div className="glassmorphism px-5 py-4 rounded-3xl flex flex-col gap-5 h-fit">
      <div className="flex gap-8 items-center">
        <img src="/sunny.png" />
        <p className="text-5xl font-light">18°</p>
      </div>
      <div className="flex flex-col gap-1 text-start">
        <p className="text-2xl font-semibold">Tuesday</p>
        <p className="text-lg text-white font-semibold mt-2">Forecast</p>
        <p className="text-lg text-white/30">Partly Cloudy</p>
        <p className="text-lg text-white/30">25 Km/h</p>
      </div>
    </div>
  );
};
