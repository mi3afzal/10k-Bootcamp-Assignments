import { CREATE_MOVIE, TOGGLE_MOVIE, DELETE_MOVIE } from "../actions/movies";
import { INITIAL_DATA } from "../actions";

export default function movie_reducer(state = [], action) {
	switch (action.type) {
		case DELETE_MOVIE:
			return state.filter(s => s.id !== action.id);

		case TOGGLE_MOVIE:
			return state.map(r =>
				r.id === action.id ? Object.assign({}, r, { done: !r.done }) : r
			);

		case CREATE_MOVIE:
			return state.concat([action.movie]);

		case INITIAL_DATA:
			return action.movies;

		default:
			return state;
	}
}
