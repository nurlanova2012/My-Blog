import React from "react";
import {Sidebar} from "../../components";

function Settings() {
  return (
    <div className="settings">
      <div className="container">
        <div className="settings__inner">
          <div className="settings__content">
            <div className="settings__top">
              <span className="settings__update">Update Your Account</span>
              <span className="settings__del">Delete Your Account</span>
            </div>
            <form action="" className="settings__form">
              <label>Profile Image</label>
              <div className="settings__profile-img">
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
                <label htmlFor="settingsUserIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    height="24"
                    width="24"
                  >
                    <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
                  </svg>
                </label>
                <input
                  type="file"
                  id="settingsUserIcon"
                  className="settings__input"
                />
              </div>
              <label>
                Username
                <input type="text" placeholder="Iven John" />
              </label>
              <label>
                Email
                <input type="email" placeholder="ivenjohn@gmail.com" />
              </label>
              <label>
                Password
                <input type="password" />
              </label>
              <button className="settings__btn">Update</button>
            </form>
          </div>
          <Sidebar/>
        </div>
      </div>
    </div>
  );
}

export default Settings;
