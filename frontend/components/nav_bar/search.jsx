import React from "react";
import { MdSearch } from "react-icons/md";

class Search extends React.Component {
  render() {
    return (
      <form className="search-component">
        <input
          className="search-bar"
          type="text"
          size="30"
          placeholder="Search bar under construction"
        />
        <button className="search-button" type="submit">
          <MdSearch size={24} />
        </button>
      </form>
    );
  }
}

export default Search;
