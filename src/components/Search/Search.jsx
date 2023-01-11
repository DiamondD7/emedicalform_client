import React, { useState, useEffect } from "react";
import { API_URI } from "../../assets/js/Apiuri";

import "../../styles/searchstyles.css";
import UpdateForm from "../Form/UpdateForm";
const Search = () => {
  const [search, setSearch] = useState("");
  const [apiData, setApiData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [getUpdated, setGetUpdated] = useState([]);

  //fetch data from asp.net web api
  useEffect(() => {
    fetch(API_URI)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); //checking if data can be read
        setApiData(data);
        setIsLoaded(true);
      });
  }, []);

  const selectData = (i) => {
    setGetUpdated(i);
    setOpenModal(true);
  };

  return (
    <>
      {openModal === true ? (
        <UpdateForm updatedItems={getUpdated} />
      ) : (
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

          {isLoaded === false ? (
            <p className="loading">Loading...</p>
          ) : (
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
                  {apiData
                    .filter((items) => {
                      return search.toLowerCase() === ""
                        ? items
                        : items.firstName.toLowerCase().includes(search) ||
                            items.lastName.toLowerCase().includes(search);
                    })
                    .map((items) => (
                      <tr key={items.id}>
                        <td>{items.firstName}</td>
                        <td>{items.lastName}</td>
                        <td>{items.personalEmail}</td>
                        <td>{items.sex}</td>
                        <td>
                          <button
                            className="btn-select"
                            onClick={() => selectData(items)}
                          >
                            Select
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Search;
