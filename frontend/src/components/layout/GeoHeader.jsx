import { MapPin } from "lucide-react";
import React from "react";

export const GeoHeader = () => {
  const date = new Date();

  const dateFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "short",
  };

  const formattedDate = new Intl.DateTimeFormat(
    "en-US",
    dateFormatOptions
  ).format(date);

  return (
    <div className="flex flex-col lg:flex-row gap-2 align-middle">
      <div className="flex flex-row gap-2 w-fit">
        <MapPin />
        <p className="font-medium">Brooklyn, New York, USA</p>
      </div>
      <p className="text-white/50">( {formattedDate} )</p>
    </div>
  );
};
