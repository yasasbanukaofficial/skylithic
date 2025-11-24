import { MapPin } from "lucide-react";
import React from "react";

export const GeoHeader = ({ location }) => {
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
        <p className="font-medium">{location}</p>
      </div>
      <p className="text-white/50">( {formattedDate} )</p>
    </div>
  );
};
