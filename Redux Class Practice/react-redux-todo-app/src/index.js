import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { createStore } from "redux";
import combineReducers from "./reducers";
import middlewares from "./middlewares";

const store = createStore(combineReducers, middlewares);

ReactDOM.render(<App store={store} />, document.getElementById("root"));
