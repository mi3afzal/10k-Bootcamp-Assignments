import { combineReducers } from "redux";
import task_reducer from "./tasks";
import movie_reducer from "./movies";

export default combineReducers({
	task: task_reducer,
	movie: movie_reducer
});
