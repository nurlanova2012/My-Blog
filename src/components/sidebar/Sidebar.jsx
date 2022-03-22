import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__item">
        <h4 className="sidebar__item-title">About me</h4>
        <img
          src="https://images.unsplash.com/photo-1513436539083-9d2127e742f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2063&q=80"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem animi
          vero facere. Nisi, ipsum quae! Quibusdam quam quos fugit adipisci
          doloribus illo voluptatem repudiandae, iusto possimus cupiditate iste
          voluptas voluptatibus!
        </p>
      </div>
      <div className="sidebar__item">
        <h4 className="sidebar__item-title">Categories</h4>
        <ul className="sidebar__item-menu">
          <li className="sidebar__item-category">Technology</li>
          <li className="sidebar__item-category">Coding</li>
          <li className="sidebar__item-category">Livestyle</li>
          <li className="sidebar__item-category">Music</li>
          <li className="sidebar__item-category">Hobby</li>
          <li className="sidebar__item-category">Travel</li>
          <li className="sidebar__item-category">Health</li>
        </ul>
      </div>
      <div className="sidebar__item">
        <h4 className="sidebar__item-title">Follow me</h4>
        <ul className="sidebar__socials">
          <li className="sidebar__socials-item">
            <a
              href="https://github.com/nurlanova2012"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="sidebar__item-icon" />
            </a>
          </li>
          <li className="sidebar__socials-item">
            <a
              href="https://github.com/nurlanova2012"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon className="sidebar__item-icon" />
            </a>
          </li>
          <li className="sidebar__socials-item">
            <a
              href="https://github.com/nurlanova2012"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon className="sidebar__item-icon" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
