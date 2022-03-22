import React from "react";

function Write() {
  return (
    <section className="write">
      <div className="container">
        <div className="write__inner">
          <form className="write__form">
            <div className="write__form-group">
            <label className="write__file-label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="24"
                height="24"
              >
                <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" />
              </svg>
              Choose Image
              </label>
              <img
                src="https://images.unsplash.com/photo-1516417156595-3ca5df62a3a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80"
                alt=""
                className="write__img"
              />
            <input type="file" id="fileInput" className="write__file-input"/>
            <input type="text" placeholder="Title" autoFocus = {true} className="write__input"/>
            </div>
            <div className="write__form-group">
            <textarea placeholder="Your content" className="write__textarea"></textarea>
            </div>
            <button className="write__publish-btn" type="submit">Publish</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Write;
