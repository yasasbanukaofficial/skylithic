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
    <div className="flex gap-2 align-middle">
      <MapPin />
      <p className="font-medium">Brooklyn, New York, USA</p>
      <p className="text-white/50">( {formattedDate} )</p>
    </div>
  );
};
