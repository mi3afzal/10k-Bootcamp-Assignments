const LOGIN_KEY = "LoggedinUser";

export const login = userObj => {
	localStorage.setItem(LOGIN_KEY, JSON.stringify(userObj));
};

export const loginUser = () => {
	return JSON.parse(localStorage.getItem(LOGIN_KEY));
};

export const logout = () => {
	localStorage.removeItem(LOGIN_KEY);
};

export const isLogin = () => {
	if (localStorage.getItem(LOGIN_KEY)) {
		return true;
	}
	return false;
};
