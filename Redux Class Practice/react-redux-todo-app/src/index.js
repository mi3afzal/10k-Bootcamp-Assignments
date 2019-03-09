import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { createStore } from "redux";
import combineReducers from "./reducers";
import middlewares from "./middlewares";

import { Provider } from "react-redux";

const store = createStore(combineReducers, middlewares);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
