import React from "react";
import { PostDetail } from "../index";

function PostItem() {
  return (
    <div className="post">
      <div className="post__inner">
        <img
          src="https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2094&q=80"
          alt=""
          className="post__img"
        />
        <div className="post__content">
          <h3 className="post__title">Editorial, Nature, Wallpapers</h3>
          <p className="post__excerpt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            harum, laborum at natus eveniet esse, placeat rerum dicta autem
            itaque fugiat quae reiciendis, tempora sed excepturi ratione aut
            similique quos?
          </p>
        </div>
      </div>
      <PostDetail />
    </div>
  );
}

export default PostItem;
