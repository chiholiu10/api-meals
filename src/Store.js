import { createStore, applyMiddleware } from "redux";
import getData from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(getData, applyMiddleware(thunk));
