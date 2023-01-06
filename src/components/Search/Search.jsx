import React from "react";

import "../../styles/searchstyles.css";
const Search = () => {
  return (
    <div>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="search patient"
        />
        <button className="search-btn">Search</button>
      </div>
    </div>
  );
};

export default Search;
