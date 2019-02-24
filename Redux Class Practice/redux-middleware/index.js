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

/* function root_reducer(state = { task: [], movie: [] }, action) {
	return {
		task: task_reducer(state.task, action),
		movie: movie_reducer(state.movie, action)
	};
} */

// main Store
/* function createStore(reducer) {
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
		listenersArray.forEach(listener => listener());
	};

	const getState = () => state;

	return {
		getState,
		subscribe,
		dispatch
	};
} */

//const store = createStore(root_reducer);
const store = Redux.createStore(
	Redux.combineReducers({
		task: task_reducer,
		movie: movie_reducer
	})
);

function validateDispatch(store, action) {
	if (
		action.type === CREATE_TASK &&
		action.task.name.toLowerCase().includes("pizza")
	) {
		return alert("Pizza is not allowed, you are on diet!");
	}
	return store.dispatch(action);
}

// Subscribes
unsubscribe = store.subscribe(() => {
	const storeData = store.getState();
	console.log("State: ", storeData);
	displayLists("task", storeData.task);
	displayLists("movie", storeData.movie);
});
function displayLists(index, data) {
	let lis = "";
	data.forEach(rec => {
		let aStyle = "";
		if (rec.done) aStyle = ' style="text-decoration: line-through"';
		lis +=
			"<li>" +
			'<a href="javascript:void(0);" ' +
			aStyle +
			" onclick=\"toggle_item('" +
			index +
			"', '" +
			rec.id +
			"')\">" +
			rec.name +
			"</a><button onclick=\"delete_item('" +
			index +
			"', '" +
			rec.id +
			"')\">X</button></li>";
	});
	document.getElementById(index + "_list").innerHTML = lis;
}
//unsubscribe();

// actions
function generateId() {
	return (
		Math.random()
			.toString(36)
			.substring(2) + new Date().getTime().toString(36)
	);
}
function add_item(index) {
	const input = document.getElementById(index + "_input");
	const value = input.value;
	if (value === "") {
		input.focus();
		alert("Please enter " + index);
		return false;
	}
	input.value = "";
	store.dispatch({
		type: index === "task" ? CREATE_TASK : CREATE_MOVIE,
		task: {
			id: generateId(),
			name: value,
			done: false
		}
	});
}
function delete_item(index, id) {
	store.dispatch({
		type: index === "task" ? DELETE_TASK : DELETE_MOVIE,
		id: id
	});
}
function toggle_item(index, id) {
	store.dispatch({
		type: index === "task" ? TOGGLE_TASK : TOGGLE_MOVIE,
		id: id
	});
}

//console.log(store.getState());
