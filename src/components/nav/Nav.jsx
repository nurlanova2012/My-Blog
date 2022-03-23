import { Link } from "react-router-dom";

function Nav() {
  const user = false;

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__inner">
          <div className="nav__left">
            <Link to="/" className="nav__logo">
              Blogger
            </Link>
          </div>
          <div className="nav__center">
            <ul className="nav__menu">
              <li className="nav__menu-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav__menu-item">
                <Link to="/">About</Link>
              </li>
              <li className="nav__menu-item">
                <Link to="/">Contact</Link>
              </li>
              <li className="nav__menu-item">
                <Link to="/write">Write</Link>
              </li>
              <li className="nav__menu-item">{user && "Logout"}</li>
            </ul>
          </div>
          <div className="nav__right">
            {user ? (
              <img
                src="https://images.unsplash.com/photo-1548983965-416c1920352e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt=""
                className="nav__img"
              />
            ) : (
              <ul className="nav__menu">
                <li className="nav__menu-item">
                  <Link to="/login">Login</Link>
                </li>
                <li className="nav__menu-item">
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
