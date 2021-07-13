import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

function Search() {
  const [term, setTerm] = useState("");
  const [sbFocus, setFocus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  // debugger;
  return (
    <form className="search-component" onSubmit={handleSubmit}>
      <input
        className={`search-bar ${
          sbFocus ? " search-bar-focus search-focus" : ""
        }`}
        type="text"
        size="30"
        onClick={() => setFocus(!sbFocus)}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Shop for unique items"
      />
      <button
        className={`search-button ${
          sbFocus ? " search-button-focus search-focus" : ""
        }`}
        type="submit"
      >
        <MdSearch size={24} />
      </button>
      <ul
        className={`search-list ${
          sbFocus && term.length === 0 ? " search-list-focus search-focus" : ""
        }`}
      >
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
      </ul>
      <div
        className={`search-background ${
          sbFocus ? " search-background-focus" : ""
        }`}
        onClick={() => setFocus(false)}
      ></div>
    </form>
  );
}

export default Search;
