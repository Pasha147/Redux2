import React from "react";
import { connect } from "react-redux";
import Post from "./Post";

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    // console.log("syncPosts>>", syncPosts);
    return <p className="text-center">нет постов</p>;
  }

  return syncPosts.map((item) => <Post post={item} key={item.id} />);
};

const mapStateToProps = (state) => {
  //   console.log("state", state);
  // return state; так передаем весь стейт

  return {
    syncPosts: state.posts.posts, //так передаем только нужные елементы стейта
  };
};

export default connect(mapStateToProps, null)(Posts);
//connect функция высокого порядка, принимает Posts и возвращает компонент с той же разметкой но с доп. функциями
// синтаксис: connect(...) возвращает функцию, в которую передаем (Posts)
