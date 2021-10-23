import {
  INCREMENT,
  DECREMENT,
  ASYNC_INCREMENT,
  CHANGE_THEME,
  ANABLE_BTN,
  DISABLE_BTNS,
} from "./types";

export function increment() {
  return {
    type: INCREMENT,
  };
}
export function decrement() {
  return {
    type: DECREMENT,
  };
}

export function asyncIncrement() {
  // так задается асинхронность (53:00 Redux Полный Курс 2020)
  return function (dispatch) {
    dispatch(disableBtns());
    setTimeout(() => {
      //   dispatch({ type: ASYNC_INCREMENT });
      dispatch(increment());
      dispatch(anableBtns());
    }, 2000);
  };
}

export function changeTheme(newTheme) {
  return { type: CHANGE_THEME, payload: newTheme };
}

export function anableBtns() {
  return {
    type: ANABLE_BTN,
  };
}
export function disableBtns() {
  return {
    type: DISABLE_BTNS,
  };
}
