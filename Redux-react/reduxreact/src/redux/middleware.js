import { showAlert } from "./actions";
import { CREATE_POST } from "./types";

const spam = ["fuck", "ass"];

export function spamWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const found = spam.filter((w) => action.payload.title.includes(w));
        if (found.length) {
          return dispatch(showAlert("SPAM"));
        }
      }
      return next(action);
    };
  };
}
