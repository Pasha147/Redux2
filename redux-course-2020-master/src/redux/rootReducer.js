import { combineReducers } from "redux";
import {
  INCREMENT,
  DECREMENT,
  ASYNC_INCREMENT,
  CHANGE_THEME,
  ANABLE_BTN,
  DISABLE_BTNS,
} from "./types";

function counterReducer(state = 0, action) {
  //   console.log("action>", action.type);
  if (action.type === INCREMENT) {
    return state + 1;
  }
  if (action.type === DECREMENT) {
    return state - 1;
  }
  if (action.type === ASYNC_INCREMENT) {
    //не работает потому, что нужно возвращать стейт. нельзя возвращать асинхронность
    // setTimeout(() => {
    //   return state + 1;
    // }, 2000);

    return state + 1;
  }
  return state;
}

const initialThemeState = {
  value: "light",
  disabled: false,
};

function themReducer(state = initialThemeState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, value: action.payload };
    case ANABLE_BTN:
      return { ...state, disabled: false };
    case DISABLE_BTNS:
      return { ...state, disabled: true };

    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themReducer,
});
