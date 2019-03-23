import { combineReducers } from "redux";
import task_reducer from "./tasks";
import movie_reducer from "./movies";
import { INITIAL_DATA } from "../actions";

export default combineReducers({
	task: task_reducer,
	movie: movie_reducer,
	Loading: loading_reducer
});

function loading_reducer(state = [], action) {
	switch (action.type) {
		case INITIAL_DATA:
			return false;

		default:
			return state;
	}
}
