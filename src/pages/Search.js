import React, { useEffect, useState } from "react";
import { API } from "../API";

export const Search = () => {
  // TODO: use this in datalist option
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    API.getBreedList()
      .then((res) => res.json())
      .then((breeds) => console.log(breeds))
      .catch((err) => console.log(err));
  });
  return (
    <div className="container">
      Search Page
      <label htmlFor="ice-cream-choice">Search Breeds</label>
      <input
        list="ice-cream-flavors"
        id="ice-cream-choice"
        name="ice-cream-choice"
      ></input>
      <datalist id="ice-cream-flavors">
        {/* TODO: make this value dynamic */}
        <option value="Chocolate" />
      </datalist>
    </div>
  );
};
