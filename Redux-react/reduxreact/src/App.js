import React from "react";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхр посты</h2>
          <Posts posts={[1, 2, 3]} />
        </div>
        <div className="col">
          <h2>Асинхр посты</h2>
          <FetchedPosts posts={[1, 2]} />
        </div>
      </div>
    </div>
  );
}

export default App;