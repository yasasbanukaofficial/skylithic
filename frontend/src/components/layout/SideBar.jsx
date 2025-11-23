import React from "react";
import { ChartLineDefault } from "./ChartDisplay";

export const SideBar = () => {
  return (
    <div className="glassmorphism text-center w-75 flex flex-col gap-6 rounded-4xl p-6">
      <h1 className="font-medium text-2xl font-logo underline underline-offset-8">
        SkyLithic
      </h1>
      <div className="flex flex-col gap-2">
        <p className="text-start text-white/50">Status</p>
        <ChartLineDefault />
      </div>
    </div>
  );
};
