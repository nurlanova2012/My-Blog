import React from "react";

function Write() {
  return (
    <section className="write">
      <div className="container">
        <div className="write__inner">
          <span className="write__icon">Choose Image</span>
          <img
            src="https://images.unsplash.com/photo-1516417156595-3ca5df62a3a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80"
            alt=""
            className="write__img"
          />
          <form action="">
              <input type="title" placeholder="Title" />
              <textarea placeholder="Your content"></textarea>
              <button type="submit">Publish</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Write;
