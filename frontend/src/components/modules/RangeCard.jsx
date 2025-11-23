import React from "react";

export const RangeCard = ({ range, temperature }) => {
  return (
    <div className="flex gap-8 text-center align-middle justify-center text-cards">
      <p className="text-white/40">{range}</p>
      <p>{temperature}</p>
    </div>
  );
};
