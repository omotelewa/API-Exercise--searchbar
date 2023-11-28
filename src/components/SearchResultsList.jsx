import React from "react";
import "./SearchResults.css";
import { SearchResults } from "./SearchResults";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="SearchResults">
      {results.map((results, id) => {
        return <SearchResults result={results} />;
      })}
    </div>
  );
};
