import React from "react";

function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__inner">
          <div className="nav__left">
            <a href="/" className="nav__logo">
              Blogger
            </a>
          </div>
          <div className="nav__center">
            <ul className="nav__menu">
              <li className="nav__menu-item">Home</li>
              <li className="nav__menu-item">About</li>
              <li className="nav__menu-item">Contact</li>
              <li className="nav__menu-item">Write</li>
              <li className="nav__menu-item">Logout</li>
            </ul>
          </div>
          <div className="nav__right">
            <img
              src="https://images.unsplash.com/photo-1548983965-416c1920352e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt=""
              className="nav__img"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
