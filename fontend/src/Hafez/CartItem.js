import React, { useEffect, useState } from "react";
import { BsArrowUpSquareFill, BsArrowDownSquareFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { incrementItem, decrementItem } from "./store/actions/cart";

const CartItem = ({ product, quantity, price }) => {
  const dispatch = useDispatch();

  const quantityHandler = (type) => {
    if (type === "incr") {
      dispatch(incrementItem(product._id));
    } else {
      dispatch(decrementItem(product._id));
    }
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <div className="columns is-vcentered">
            <div className="column">
              <img
                src={`http://localhost:5000/${product.gallery[0]}`}
                style={{ maxHeight: "13rem" }}
              />
            </div>
            <div className="column is-two-thirds">
              <h3 className="title">{product.name}</h3>
              <p className="title is-4 text-strong">
                {Intl.NumberFormat("en-US").format(product.price)} EGP
              </p>
            </div>
            <div className="column">
              <div className="columns is-vcentered is-flex-direction-column">
                <BsArrowUpSquareFill
                  size={35}
                  onClick={() => quantityHandler("incr")}
                />
                <div style={{ margin: "1rem" }}>
                  <p>{quantity}</p>
                </div>
                <BsArrowDownSquareFill
                  size={35}
                  onClick={() => quantityHandler("decr")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartItem);
