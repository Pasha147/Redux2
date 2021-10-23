import "./styles.css";
import { createStore, applyMiddleware, compose } from "redux"; //"./createStore";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { rootReducer } from "./redux/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension"; //если устанавливаем девтулз через npm. У них на сайте написано как это делать https://github.com/zalmoxisus/redux-devtools-extension#installation
import {
  asyncIncrement,
  changeTheme,
  decrement,
  increment,
} from "./redux/actions";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");

//создание своего applyMiddleware

// function logger(state) {
//   return function (next) {
//     return function (action) {
//       console.log("Prev State", state.getState());
//       console.log("Action>>>", action);
//       const newState = next(action);
//       console.log("New State", newState);

//       return newState;
//       // return next(action);
//     };
//   };
// }

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))

  // compose  нужен для соединения мидлвеа и window.__RE...
  // compose(
  //   applyMiddleware(thunk, logger),
  //   //для подключения редакс, берется с https://github.com/zalmoxisus/redux-devtools-extension#installation
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);
// window.store = store;

addBtn.addEventListener("click", () => {
  store.dispatch(increment());
});
subBtn.addEventListener("click", () => {
  store.dispatch(decrement());
});
asyncBtn.addEventListener("click", () => {
  // asyncIncrement();
  store.dispatch(asyncIncrement());
});

store.dispatch({ type: "INIT_APP" });

themeBtn.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("light") ? "dark" : "light";
  store.dispatch(changeTheme(newTheme));
  // document.body.classList.toggle("dark");
});

store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state.counter;
  document.body.className = state.theme.value;

  [addBtn, subBtn, themeBtn, asyncBtn].forEach((btn) => {
    btn.disabled = state.theme.disabled;
  });
});
store.dispatch({ type: "INIT_APP" });
