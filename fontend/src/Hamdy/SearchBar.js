import React from "react";
import "bulma/css/bulma.min.css";
import { FaSearch } from "react-icons/fa";

function SearchBar({ searchProducts }) {
  return (
    <div className="field m-2">
      <label className="label">Search for products</label>
      <div className="control has-icons-left has-icons-right">
        <input
          className="input is-primary"
          type="text"
          onChange={(e) => searchProducts(e.target.value)}
        />
        <span className="icon is-small is-left">
          <FaSearch />
        </span>
        <span className="is-small is-right">
          <button onClick={"function where"} className="button is-primary m-2">
            Search
          </button>
        </span>
      </div>
      <p className="help is-success">What are you looking for ?</p>
    </div>
  );
}

export default SearchBar;
