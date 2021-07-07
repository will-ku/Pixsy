import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

function Search() {
  const [term, setTerm] = useState();

  return (
    <form className="search-component">
      <input
        className="search-bar"
        type="text"
        size="30"
        placeholder="I'm shopping for..."
      />
      <button className="search-button" type="submit">
        <MdSearch size={24} />
      </button>
    </form>
  );
}

export default Search;
