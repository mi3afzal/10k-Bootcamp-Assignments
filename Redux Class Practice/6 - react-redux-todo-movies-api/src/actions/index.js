export const INITIAL_DATA = "INITIAL_DATA";
export const API = window.API;

export function fetchInitialData() {
	return dispatch => {
		Promise.all([API.fetchTasks(), API.fetchMovies()]).then(
			([tasks, movies]) => {
				dispatch({
					type: INITIAL_DATA,
					tasks: tasks,
					movies: movies
				});
			}
		);
	};
}
