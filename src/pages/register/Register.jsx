import React from "react";
function Register() {
  return (
    <div className="register">
      <div className="container">
        <div className="register__inner">
          <h2 className="register__title">Register</h2>
          <form  className="register__form">
            <label >
              Email
              <input type="email" placeholder="Your email" />
            </label>
            <label >
              Username
              <input type="username" placeholder="Your username" />
            </label>
            <label >
              Password
              <input type="password" placeholder="Your password" />
            </label>
            <button className="register__btn">Register</button>
            <button className="register__btn register__login">Login</button>
          </form>
        
        </div>
      </div>
    </div>
  );
}

export default Register;
