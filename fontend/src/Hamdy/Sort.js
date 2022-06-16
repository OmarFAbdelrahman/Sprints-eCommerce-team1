import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";

function Sort({ sortProducts }) {
  return (
    <div className="card is-flex is-justify-content-space-around mt-2 pt-3 pb-0">
      <p className="title is-5">Sort by</p>
      <div className="is-flex is-justify-content-space-around">
        <p className="title is-5 mr-2">Price</p>
        <button
          onClick={() => sortProducts("price", "asc")}
          className="button is-primary is-small mr-1"
        >
          <span className="icon is-small">
            <FaArrowAltCircleDown />
          </span>
        </button>
        <button
          onClick={() => sortProducts("price", "desc")}
          className="button is-danger is-small"
        >
          <span className="icon is-small">
            <FaArrowAltCircleUp />
          </span>
        </button>
      </div>
      <div className="is-flex is-justify-content-space-around">
        <p className="title is-5 mr-2">Rating</p>
        <button
          className="button is-primary is-small"
          onClick={() => sortProducts("name", "asc")}
        >
          <span className="icon is-small">
            <FaArrowAltCircleDown />
          </span>
        </button>
        <button
          className="button is-danger is-small"
          onClick={() => sortProducts("name", "desc")}
        >
          <span className="icon is-small">
            <FaArrowAltCircleUp />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Sort;
