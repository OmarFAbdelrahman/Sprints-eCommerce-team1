import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { clear } from "./store/actions/cart";
import LoadingScreen from "../Hamdy/LoadingScreen";

const Cart = ({ auth }) => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [cartItems, setCartItems] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [loading, setLoading] = useState("");
  const [showModal, setShowModal] = useState(false);

  const getCartItems = async () => {
    try {
      setLoading("active");
      setCartItems({});
      const ids = Object.keys(cart);
      for (let i = 0; i < ids.length; i++) {
        const quantity = cart[ids[i]];
        const res = await fetch(
          `http://localhost:5000/api/v1/products/${ids[i]}`
        );
        const json = await res.json();
        const product = json.product;
        setCartItems((state) => {
          return {
            ...state,
            [product._id]: {
              product,
              quantity,
              price: product.price * quantity,
            },
          };
        });
      }
    } catch {
      alert("something went wrong");
    } finally {
      setLoading("");
    }
  };

  useEffect(() => {
    if (Object.keys(cart).length > 0) {
      getCartItems();
    } else {
      setCartItems({});
    }
  }, [cart]);

  useEffect(() => {
    if (cartItems) {
      let sum = 0;
      Object.keys(cartItems).forEach(
        (itemId) => (sum += cartItems[itemId].price)
      );
      setTotalPrice(sum);
    }
  }, [cartItems]);

  const checkoutHandler = async () => {
    try {
      const items = Object.keys(cartItems).map((id) => {
        return {
          product: id,
          quantity: cartItems[id].quantity,
          price: cartItems[id].price,
        };
      });
      console.log(items);
      const res = await axios.post(
        "http://localhost:5000/api/v1/orders",
        {
          cartItems: items,
          paymentMethod,
          shippingFee: 20,
        },
        { withCredentials: true }
      );
      if (res.status === 201) {
        alert("your order has been sent successfully");
        dispatch(clear());
        navigate("/");
      }
    } catch {
      alert("something went wrong");
    }
  };

  return (
    <>
      <LoadingScreen state={loading} />
      <div className="container is-fluid">
        {totalPrice > 0 && (
          <div className="card mb-3 mt-1">
            <div className="card-content is-flex is-justify-content-space-between is-align-items-center">
              <div>
                <p className="title is-4">Total Price</p>
                <p className="title is-3">
                  {Intl.NumberFormat("en-US").format(totalPrice)} EGP
                </p>
              </div>
              <button
                className="button is-primary is-large is-dark"
                onClick={() => (auth ? setShowModal(true) : navigate("/login"))}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
        {cartItems &&
          Object.keys(cartItems).map((itemId) => (
            <CartItem
              key={itemId}
              product={cartItems[itemId].product}
              quantity={cartItems[itemId].quantity}
              price={cartItems[itemId].price}
            />
          ))}
      </div>
      <div className={`modal ${showModal ? "is-active" : null}`}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="card">
            <div className="card-content is-flex is-justify-content-space-between is-align-items-center">
              <div>
                <p className="mb-4">Select Payment Method</p>
                <div className="control">
                  <label className="radio">
                    <input
                      type="radio"
                      name="answer"
                      value="Cash"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      defaultChecked
                    />
                    Cash
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="answer"
                      value="Card"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Card
                  </label>
                </div>
              </div>
              <div>
                <button
                  className="button is-primary mt-4 mr-3"
                  onClick={checkoutHandler}
                >
                  Checkout
                </button>
                <button
                  className="button is-danger mt-4"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setShowModal(false)}
        ></button>
      </div>
    </>
  );
};

export default Cart;
