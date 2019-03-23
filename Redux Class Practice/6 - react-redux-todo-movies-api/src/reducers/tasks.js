import { CREATE_TASK, TOGGLE_TASK, DELETE_TASK } from "../actions/tasks";
import { INITIAL_DATA } from "../actions";

export default function task_reducer(state = [], action) {
	switch (action.type) {
		case DELETE_TASK:
			return state.filter(s => s.id !== action.id);

		case TOGGLE_TASK:
			return state.map(r =>
				r.id === action.id ? Object.assign({}, r, { done: !r.done }) : r
			);

		case CREATE_TASK:
			return state.concat([action.task]);

		case INITIAL_DATA:
			return action.tasks;

		default:
			return state;
	}
}
