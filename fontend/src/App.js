import "bulma/css/bulma.min.css";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Hafez/Cart";
import { Provider } from "react-redux";
import Homepage from "./Hamdy/Homepage";
import Login from "./Hamdy/Login";
import Navbar from "./Hafez/Navbar";
import store from "./Hafez/store/store";
import { useState, useEffect } from "react";
import Orders from "./Hafez/orders";
import Product from "./Hamdy/Product";

function App() {
  const [auth, setAuth] = useState();
  const authHandler = (type, token = null) => {
    if (type === "login") {
      localStorage.setItem("auth", token);
      setAuth(token);
    } else {
      localStorage.clear();
      setAuth(null);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("auth").length > 5) {
      setAuth(localStorage.getItem("auth"));
    }
  }, []);
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar auth={auth} authHandler={authHandler} />
          <Routes>
            <Route path="/cart" element={<Cart auth={auth} />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/:categoryId" element={<Homepage />} />
            <Route path="/search/:searchQuery" element={<Homepage />} />

            <Route path="/products/:productId" element={<Product />} />
            <Route
              path="/login"
              element={<Login authHandler={authHandler} />}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
