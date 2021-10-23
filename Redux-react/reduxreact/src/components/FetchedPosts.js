import React from "react";
import Post from "./Post";

const FetchedPosts = ({ posts }) => {
  if (!posts.length) {
    return <button className="btn btn-primary">Загрузить</button>;
  }
  return posts.map((item) => <Post post={item} key={item} />);
};

export default FetchedPosts;
