import { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { BiLogIn } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = ({ auth, authHandler }) => {
  const [categories, setCategories] = useState();
  const [searchQ, setSearchQ] = useState();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/auth/logout", {
        withCredentials: true,
      });
      if (res.status === 200) {
        authHandler("login");
        navigate("/");
      }
    } catch {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json.categories));
  }, []);
  console.log(categories);
  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="https://i.ibb.co/SRVw6K4/Daco-4160577.png" />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a key={"all"} className="navbar-item" onClick={() => navigate(`/`)}>
            All PROUDCTS
          </a>
          {categories &&
            categories.map((cat) => (
              <a
                key={cat._id}
                className="navbar-item"
                onClick={() => navigate(`/${cat._id}`)}
              >
                {cat.name.toUpperCase()}
              </a>
            ))}
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate(`/search/${searchQ}`);
              }}
            >
              <input
                className="input is-primary"
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchQ(e.target.value)}
              />
            </form>
          </div>
          <div
            className="navbar-item"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("cart")}
          >
            <BsCart4 size={25} />
            <span style={{ marginLeft: "0.5rem" }}>Cart</span>
          </div>
          <div className="navbar-item">
            <VscAccount size={25} />
            <span
              style={{ marginLeft: "0.5rem", cursor: "pointer" }}
              onClick={() => {
                if (!auth) {
                  navigate("/login");
                }
              }}
            >
              {auth ? `My account` : `Login`}
            </span>
            {auth && (
              <div className="navbar-item">
                <BiLogIn size={25} />
                <span
                  style={{ marginLeft: "0.5rem", cursor: "pointer" }}
                  onClick={logoutHandler}
                >
                  Log out
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
