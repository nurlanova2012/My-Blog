import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="login__inner">
          <h2 className="login__title">LOGIN</h2>
          <form className="login__form">
            <label>
              Email
              <input type="email" placeholder="Your Email" />
            </label>
            <label>
              Password
              <input type="password" placeholder="Your Password" />
            </label>
            <button className="login__btn">Login</button>
          </form>
          <Link to="/register" className="login__btn login__register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
