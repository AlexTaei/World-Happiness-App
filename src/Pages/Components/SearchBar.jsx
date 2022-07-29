import React from "react";
import { useState } from "react";

//Searchbar
export default function SearchBar(props) {
  const [innerSearch, setInnerSearch] = useState("");
  return (
    <div>
      <input
        aria-labelledby="search-button"
        name="search"
        id="search"
        type="search"
        value={innerSearch}
        onChange={(e) => setInnerSearch(e.target.value)}
      />
      <br/><button
        id="search-button"
        type="button"
        onClick={() => props.onSubmit(innerSearch)} 
      >{/*On submit, it is equal to innersearch for exporting*/}
        Enter
      </button>
    </div>
  );
}