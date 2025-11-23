import { Search } from "lucide-react";
import React from "react";

export const SearchCard = () => {
  return (
    <div className="glassmorphism w-fit h-fit rounded-full flex p-4">
      <input placeholder="Enter a city" className="focus:outline-none" />
      <Search className="cursor-pointer" />
    </div>
  );
};
