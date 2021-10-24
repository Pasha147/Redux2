import {
  CREATE_POST,
  FETCH_POSTS,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
} from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function fetchPosts() {
  //при асинхронности нужно возвращать не объект а функцию
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const json = await response.json();

      setTimeout(() => {
        dispatch({ type: FETCH_POSTS, payload: json });
        dispatch(hideLoader());
      }, 1000);
    } catch (e) {
      dispatch(showAlert("нет загрузки с сервера"));
      dispatch(hideLoader());
    }
  };
}

export function showLoader() {
  return { type: SHOW_LOADER };
}
export function hideLoader() {
  return { type: HIDE_LOADER };
}

export function showAlert(text) {
  return (dispatch) => {
    dispatch({ type: SHOW_ALERT, payload: text });
    setTimeout(() => {
      dispatch(hideAlert());
    }, 1000);
  };
}
export function hideAlert() {
  return { type: HIDE_ALERT };
}
