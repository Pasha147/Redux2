import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  if (!posts.length) {
    return <p className="text-center">нет постов</p>;
  }
  return posts.map((item) => <Post post={item} key={item} />);
};

export default Posts;
