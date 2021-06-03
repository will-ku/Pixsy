import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div className="search-component">
        <div className="search-bar">
          <input
            type="text"
            size="88"
            placeholder="Search bar under construction"
          />
        </div>
        <div>
          <button className="search-button">S</button>
        </div>
      </div>
    );
  }
}

export default Search;
