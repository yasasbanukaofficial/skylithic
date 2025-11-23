import React from "react";

export const WeatherCard = () => {
  return (
    <div className="glassmorphism px-5 py-4 rounded-3xl flex flex-col gap-5">
      <div className="flex gap-8 items-center">
        <img src="/sun-and-cloud.png" />
        <p className="text-3xl font-light">18°</p>
      </div>
      <div className="flex flex-col gap-1 text-start">
        <p>Liverpool, UK</p>
        <p className="text-sm text-white/30">Partly Cloudy</p>
      </div>
    </div>
  );
};
