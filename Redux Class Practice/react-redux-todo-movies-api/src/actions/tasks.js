export const CREATE_TASK = "CREATE_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const DELETE_TASK = "DELETE_TASK";

function generateId() {
	return (
		Math.random()
			.toString(36)
			.substring(2) + new Date().getTime().toString(36)
	);
}

export function createTaskAction(value) {
	return {
		type: CREATE_TASK,
		task: {
			id: generateId(),
			name: value,
			done: false
		}
	};
}

export function toggleTaskAction(id) {
	return {
		type: TOGGLE_TASK,
		id: id
	};
}

export function deleteTaskAction(id) {
	return {
		type: DELETE_TASK,
		id: id
	};
}
