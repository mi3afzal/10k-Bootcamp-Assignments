function task_reducer_old(state = [], action) {
	if (action.type === "DELETE_TASK") {
		return state.filter(s => s.id !== action.id);
	} else if (action.type === "TOGGLE_TASK") {
		return state.map(r =>
			r.id === action.id ? Object.assign({}, r, { done: !r.done }) : r
		);

		/* return state.map(r =>
			r.id === action.id
				? {
						id: r.id,
						task: r.task,
						done: !r.done
				  }
				: r
		); */
	} else if (action.type === "CREATE_TASK") {
		return state.concat([action.task]);
	}

	return state;
}

const DELETE_TASK = "DELETE_TASK";
const TOGGLE_TASK = "TOGGLE_TASK";
const CREATE_TASK = "CREATE_TASK";
function task_reducer(state = [], action) {
	switch (action.type) {
		case DELETE_TASK:
			return state.filter(s => s.id !== action.id);

		case TOGGLE_TASK:
			return state.map(r =>
				r.id === action.id ? Object.assign({}, r, { done: !r.done }) : r
			);

		case CREATE_TASK:
			return state.concat([action.task]);

		default:
			return state;
	}
}

const DELETE_MOVIE = "DELETE_MOVIE";
const TOGGLE_MOVIE = "TOGGLE_MOVIE";
const CREATE_MOVIE = "CREATE_MOVIE";
function movie_reducer(state = [], action) {
	switch (action.type) {
		case DELETE_MOVIE:
			return state.filter(s => s.id !== action.id);

		case TOGGLE_MOVIE:
			return state.map(r =>
				r.id === action.id ? Object.assign({}, r, { done: !r.done }) : r
			);

		case CREATE_MOVIE:
			return state.concat([action.task]);

		default:
			return state;
	}
}

function root_reducer(state = { task: [], movie: [] }, action) {
	return {
		task: task_reducer(state.task, action),
		movie: movie_reducer(state.movie, action)
	};
}

function createStore(reducer) {
	let state;

	let listenersArray = [];

	const subscribe = listener => {
		listenersArray.push(listener);

		return () => {
			listenersArray = () => listenersArray.filter(l => l !== listener);
		};
	};

	const dispatch = action => {
		state = reducer(state, action);
		listenersArray.forEach(rec => rec());
	};

	const getState = () => state;

	return {
		getState,
		subscribe,
		dispatch
	};
}

const store = createStore(root_reducer);
unsubscribe1 = store.subscribe(() =>
	console.log("change in state happening now: ", store.getState())
);
unsubscribe2 = store.subscribe(() =>
	console.log("2nd listener !! ", store.getState())
);

store.dispatch({
	type: CREATE_TASK,
	task: {
		id: 0,
		name: "will go for walk",
		done: false
	}
});
store.dispatch({
	type: TOGGLE_TASK,
	id: 0
});
store.dispatch({
	type: DELETE_TASK,
	id: 0
});

store.dispatch({
	type: CREATE_MOVIE,
	task: {
		id: 0,
		name: "SALT",
		done: false
	}
});
store.dispatch({
	type: TOGGLE_MOVIE,
	id: 0
});
store.dispatch({
	type: DELETE_MOVIE,
	id: 0
});

//unsubscribe1();
//unsubscribe2();

//console.log(store.getState());
