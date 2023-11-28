import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchResult.css";

export const SearchResults = ({ result }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You Clicked on the ${result.name}`)}
    >
      {result.name}
    </div>
  );
};
