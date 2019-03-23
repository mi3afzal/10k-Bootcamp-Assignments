import { API } from "./index";

export const CREATE_MOVIE = "CREATE_MOVIE";
export const TOGGLE_MOVIE = "TOGGLE_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";

export function createMovieAction(movieName) {
	return dispatch => {
		API.saveMovie(movieName)
			.then(movie => {
				dispatch({ type: CREATE_MOVIE, movie });
			})
			.catch(() => {
				console.log("Network error. Try later");
			});
	};
}

export function toggleMovieAction(id) {
	return dispatch => {
		API.toggleMovie(id)
			.then(movie => {
				dispatch({ type: TOGGLE_MOVIE, id: id });
			})
			.catch(() => {
				console.log("Network error. Try later");
			});
	};
}

export function deleteMovieAction(id) {
	return dispatch => {
		API.deleteMovie(id)
			.then(movie => {
				dispatch({ type: DELETE_MOVIE, id: id });
			})
			.catch(() => {
				console.log("Network error. Try later");
			});
	};
}
