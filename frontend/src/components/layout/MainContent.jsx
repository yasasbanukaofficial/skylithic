import React from "react";
import { GeoHeader } from "./GeoHeader";
import { WeatherView } from "./WeatherView";
import { SearchCard } from "../modules/SearchCard";
import { WeatherCard } from "../modules/WeatherCard";
import { DayWeatherView } from "../modules/DayWeatherView";

export const MainContent = ({ handleSearch }) => {
  return (
    <div className="flex-2/4 right-section py-6 flex flex-col h-full gap-10">
      <div className="flex flex-row">
        <div className="flex flex-col gap-9 flex-1">
          <GeoHeader />
          <WeatherView />
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
              <WeatherCard />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-2/4 flex gap-10 pt-20">
        <DayWeatherView />
        <DayWeatherView />
        <DayWeatherView />
      </div>
    </div>
  );
};
