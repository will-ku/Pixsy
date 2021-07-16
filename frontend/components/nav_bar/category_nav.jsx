import React from "react";
import { Link } from "react-router-dom";

export default function CategoryNav(props) {
  return (
    <div className="center-cats">
      <div className="category-nav-container">
        <Link to={`/category/1`}>Digital Cameras</Link>
        <Link to={`/category/2`}>Lenses</Link>
        <Link to={`/category/3`}>Bags & Cases</Link>
        <Link to={`/category/4`}>Drones</Link>
        {/* <Link to={`/category/5`}>Film Cameras</Link> */}
        <Link to={`/category/6`}>Mobile Photogprahy</Link>
        <Link to={`/category/7`}>Accessories</Link>
      </div>
    </div>
  );
}
