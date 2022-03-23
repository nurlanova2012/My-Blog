import React from "react";

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
            <button className="login__btn login__register">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
