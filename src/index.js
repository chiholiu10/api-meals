import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from "react-redux";
import getData from "./reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

export const store = createStore(getData, applyMiddleware(thunk));

const ApiMeals = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<ApiMeals />, document.getElementById("root"));
