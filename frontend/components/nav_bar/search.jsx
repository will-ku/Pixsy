import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

function Search() {
  const [term, setTerm] = useState("");
  const [sbFocus, setFocus] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFocus(false);
    history.push({
      pathname: "/search",
      search: `?q=${term}`,
    });
  };

  return (
    <form
      className="search-component"
      onSubmit={term.length === 0 ? null : handleSubmit}
    >
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
 
          <Link
            to="/products/1"
            className="search-list-item"
            onClick={() => setFocus(!sbFocus)}
          >
            Sony Alpha a7iii Mirrorless Digital Camera
          </Link>


          <Link
            to="/products/13"
            className="search-list-item"
            onClick={() => setFocus(!sbFocus)}
          >
            Canon RF 70-200mm f/2.8L IS USM Lens
          </Link>
  
     
          <Link
            to="/products/26"
            className="search-list-item"
            onClick={() => setFocus(!sbFocus)}
          >
            WANDRD PRVKE 21L Backpack
          </Link>

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
