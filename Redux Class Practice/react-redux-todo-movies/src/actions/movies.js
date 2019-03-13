export const CREATE_MOVIE = "CREATE_MOVIE";
export const TOGGLE_MOVIE = "TOGGLE_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";

function generateId() {
	return (
		Math.random()
			.toString(36)
			.substring(2) + new Date().getTime().toString(36)
	);
}

export function createMovieAction(value) {
	return {
		type: CREATE_MOVIE,
		task: {
			id: generateId(),
			name: value,
			done: false
		}
	};
}

export function toggleMovieAction(id) {
	return {
		type: TOGGLE_MOVIE,
		id: id
	};
}

export function deleteMovieAction(id) {
	return {
		type: DELETE_MOVIE,
		id: id
	};
}
