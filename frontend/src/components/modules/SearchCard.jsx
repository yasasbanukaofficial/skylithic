import { Search } from "lucide-react";
import React, { useState } from "react";

export const SearchCard = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);
  };

  const onSubmit = () => {
    const query = searchQuery.trim();
    if (query) {
      onSearch(query);
    }
  };

  const handleKeyChange = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const handleOnClick = (e) => {
    onSubmit();
  };

  return (
    <div className="glassmorphism w-fit h-fit rounded-full flex p-4">
      <input
        placeholder="Enter a city"
        className="focus:outline-none"
        onKeyDown={handleKeyChange}
        onChange={handleInputChange}
        value={searchQuery}
      />
      <Search className="cursor-pointer" onClick={handleOnClick} />
    </div>
  );
};
