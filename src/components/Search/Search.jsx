import React, { useState } from "react";
import { data } from "../../Mock/mockdata";

import "../../styles/searchstyles.css";
const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="search patient"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-btn">Search</button>
      </div>

      <div className="table-container-div">
        <table className="table-container">
          <thead className="table-thead-container">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th></th>
            </tr>
          </thead>

          <tbody className="table-tbody-container">
            {data
              .filter((items) => {
                return search.toLowerCase() === ""
                  ? items
                  : items.first_name.toLowerCase().includes(search) ||
                      items.last_name.toLowerCase().includes(search);
              })
              .map((items) => (
                <tr key={items.id}>
                  <td>{items.first_name}</td>
                  <td>{items.last_name}</td>
                  <td>{items.email}</td>
                  <td>{items.gender}</td>
                  <td>
                    <button className="btn-select">Select</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Search;
