import { takeEvery, put, call } from "redux-saga/effects";
import FetchedPosts from "../components/FetchedPosts";
import { hideLoader, showLoader, showAlert } from "./actions";
import { FETCH_POSTS, REQUEST_POSTS } from "./types";

//* нужна чтоб превратить функцию в генератор
export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

//worker
function* sagaWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchPosts);
    yield put({ type: FETCH_POSTS, payload });
    yield put(hideLoader());
  } catch (error) {
    yield put(showAlert("нет загрузки с сервера"));
    yield put(hideLoader());
  }
}

async function fetchPosts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  return await response.json();
}
