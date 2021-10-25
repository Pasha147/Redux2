import React from "react";
//import ReactDOM from "react-dom";
import { render } from "react-dom";
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { spamWordsMiddleware } from "./redux/middleware";
//сначала импортировать библиотеки, потом все остальное

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { rootReducer } from "./redux/rootReducer";

const store = createStore(
  rootReducer,
  //compose нужен для того чтоб объеденить девтулз и мидлвеар в одну функцию

  compose(
    //applyMiddleware(...) нужендля осуществления асинхронности
    //applyMiddleware позволяет диспатчить асинхронные события
    applyMiddleware(thunk, spamWordsMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(app, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
