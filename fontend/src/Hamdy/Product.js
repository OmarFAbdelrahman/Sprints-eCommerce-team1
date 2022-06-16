import React from "react";
import { useParams } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../Hafez/store/actions/cart";
import { useNavigate } from "react-router-dom";

function Product(props) {
  const [product, setProduct] = React.useState();
  const dispatch = useDispatch();
  const params = useParams();

  const navigate = useNavigate();

  React.useEffect(() => {
    fetch(`http://localhost:5000/api/v1/products/${params.productId}`)
      .then((response) => response.json())
      .then((response) => setProduct(response.product))
      .catch((error) => alert("something went wrong"));
  }, [params]);

  const addToCartHandler = (id) => {
    dispatch(addToCart(id));
    const res = window.confirm("Added Successfully, Checkout now?");
    if (res) {
      navigate("/cart");
    }
  };
  return (
    <>
      {product && (
        <section className="product">
          <div className="product--image">
            <img
              className="image"
              src={`http://localhost:5000/${product.gallery[0]}`}
              alt={product.name}
            />
          </div>
          <div className="product--info">
            <h2 className="info--title">{product.name}</h2>
            <p className="info--description">{product.description}</p>
            <div className="btns">
              <p className="product--price">
                {Intl.NumberFormat("en-US").format(product.price)} EGP
              </p>
              <button
                className="btn btn--cart ml-2"
                onClick={() => addToCartHandler(product._id)}
              >
                <span className="btn--text">Add To Cart </span>
                {<BsCart4 />}
              </button>
            </div>
          </div>
        </section>
      )}

      {/**
       * Comment section as a react component
       */}
    </>
  );
}

export default Product;
