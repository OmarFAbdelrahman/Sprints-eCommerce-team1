import React from "react";
import "bulma/css/bulma.min.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

import { addToCart } from "../Hafez/store/actions/cart";

function Catalog({ products }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCartHandler = (id) => {
    dispatch(addToCart(id));
    const res = window.confirm("Added Successfully, Checkout now?");
    if (res) {
      navigate("/cart");
    }
  };

  return (
    <div className="main m-2 p-2">
      <div className="columns">
        <div className="column">
          <div className="columns is-multiline">
            {products.map((product) => (
              <div key={product._id} className="column is-one-quarter">
                <div className="card">
                  <div
                    className="card-image is-clickable"
                    onClick={() => navigate(`/products/${product._id}`)}
                  >
                    <figure class="image is-4by3">
                      <img
                        src={`http://localhost:5000/${product.gallery[0]}`}
                        alt={product.name}
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="title is-5">{product.name}</div>

                    <p className="title is-4">
                      <b>{Intl.NumberFormat("en-US").format(product.price)}</b>{" "}
                      EGP
                    </p>
                    <button
                      className="btn btn--cart ml-2"
                      style={{ width: "100%" }}
                      onClick={() => addToCartHandler(product._id)}
                    >
                      <span className="btn--text">Add To Cart </span>
                      {<BsCart4 />}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
