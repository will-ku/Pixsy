import React from "react";
import { MdSearch } from "react-icons/md";

class Search extends React.Component {
  render() {
    return (
      <div className="search-component">
        <div className="search-bar">
          <input
            type="text"
            size="30"
            placeholder="Search bar under construction"
          />
        </div>
        <div>
          <button className="search-button">
            <MdSearch size={24} />
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
