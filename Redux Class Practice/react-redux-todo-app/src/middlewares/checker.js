import { CREATE_TASK } from "../actions/tasks";

export const checker = store => next => action => {
	if (
		action.type === CREATE_TASK &&
		action.task.name.toLowerCase().includes("pizza")
	) {
		return alert("Pizza is not allowed, you are on diet!");
	}
	return next(action);
};
