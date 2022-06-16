import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({ authHandler }) {
  const [mode, setMode] = useState("login");

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const changeHandler = (prop) => (event) => {
    setUser({ ...user, [prop]: event.target.value });
  };

  React.useEffect(() => {}, []);

  //////////////////////////////////////////////////////////////////////////////////////////
  const LoginClick = async (e) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        {
          email: user.email,
          password: user.password,
        },
        { withCredentials: true }
      );
      if (res.status === 200) {
        authHandler("login", res.data.user);
        navigate("/");
      } else {
        alert("email or password is not correct");
      }
    } catch {
      alert("email or password is not correct");
    }
  };

  const signUpClick = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/auth/signup",
        {
          email: user.email,
          password: user.password,
          firstName: user.firstName,
          lastName: user.lastName,
          phone: "01112345566",
          shippingAddress: "22,street,city",
          billingAddress: "22,street,city",
        },
        { withCredentials: true }
      );
      if (res.status === 201) {
        authHandler("login", res.data.user);
        navigate("/");
      } else {
        alert("Email is not valid");
      }
    } catch {
      alert("Email is not valid");
    }
  };

  ///////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <section className="hero is-fullheight has-background-white">
        <div className="hero-body has-text-centerd">
          <div className="container ">
            <div className="columns is-gapless is-centered">
              <div className="column has-background-white"></div>
              <div className="column has-background-light">
                <article className="panel is-dark is-shadowless has-text-centered p-2">
                  <p className="panel-heading">Ecommerce </p>
                </article>
                {mode === "signup" && (
                  <>
                    <div className="field p-2">
                      <div className="label">First Name</div>
                      <div className="control">
                        <input
                          value={user.firstName}
                          name="name"
                          onChange={changeHandler("firstName")}
                          id="name"
                          className="input"
                          type="text"
                          placeholder="First Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="field p-2">
                      <div className="label">Last Name</div>
                      <div className="control">
                        <input
                          value={user.lastName}
                          name="name"
                          onChange={changeHandler("lastName")}
                          id="name"
                          className="input"
                          type="text"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>
                  </>
                )}
                <div className="field p-2">
                  <div className="label">Email</div>
                  <div className="control">
                    <input
                      value={user.email}
                      name="name"
                      onChange={changeHandler("email")}
                      id="name"
                      className="input"
                      type="text"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className="field p-2">
                  <div className="label">Password</div>
                  <div className="control">
                    <input
                      value={user.password}
                      name="password"
                      onChange={changeHandler("password")}
                      id="pass"
                      className="input"
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                </div>
                <div className="field p-2 has-text-centered">
                  <button
                    onClick={() =>
                      mode === "login" ? LoginClick() : setMode("login")
                    }
                    className="button is-info mr-2"
                  >
                    Login
                  </button>
                  <button
                    onClick={() =>
                      mode === "signup" ? signUpClick() : setMode("signup")
                    }
                    className="button is-info is-light"
                  >
                    Sign up
                  </button>
                </div>
              </div>
              <div className="column has-background-white"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
