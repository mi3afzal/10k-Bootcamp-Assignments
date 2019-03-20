import { API } from "./index";

export const CREATE_TASK = "CREATE_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const DELETE_TASK = "DELETE_TASK";

export function createTaskAction(value) {
	return dispatch => {
		API.saveTask(value)
			.then(task => {
				dispatch({ type: CREATE_TASK, task });
			})
			.catch(() => {
				console.log("Network error. Try later");
			});
	};
}

export function toggleTaskAction(id) {
	return dispatch => {
		API.toggleTask(id)
			.then(movie => {
				dispatch({ type: TOGGLE_TASK, id: id });
			})
			.catch(() => {
				console.log("Network error. Try later");
			});
	};
}

export function deleteTaskAction(id) {
	return dispatch => {
		API.deleteTask(id)
			.then(movie => {
				dispatch({ type: DELETE_TASK, id: id });
			})
			.catch(() => {
				console.log("Network error. Try later");
			});
	};
}
