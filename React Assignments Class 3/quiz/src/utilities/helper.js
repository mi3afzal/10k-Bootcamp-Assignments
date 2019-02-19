function validateForm(check, data, field, err) {
	const { username, password } = data;

	var errors = err
		? err
		: {
				hasError: false,
				errorsObj: {}
		  };

	let Validation = {
		username: {
			Validate: [
				{
					condition: username.length < 3,
					message: "Please Specify your full username."
				}
			],
			elem: "username"
		},
		password: {
			Validate: [
				{
					condition: password.length < 5,
					message: "Password can't be less than 5 charachters."
				},
				{
					condition: username === password,
					message: "Password could not be username."
				}
			],
			elem: "password"
		}
	};

	if (check === "all") {
		for (var i in Validation) {
			let conArray = Validation[i].Validate;
			errors.errorsObj[i] = { message: [] };
			for (let j = 0; j < conArray.length; j++) {
				if (conArray[j].condition) {
					errors.errorsObj[i].message.push(conArray[j].message);
				}
			}
			if (errors.errorsObj[i].message.length) {
				errors.hasError = true;
			} else {
				delete errors.errorsObj[i];
			}
		}
		return errors;
	}

	if (check === "each") {
		let conArray = Validation[field].Validate;
		errors.errorsObj[field] = { message: [] };

		for (let j = 0; j < conArray.length; j++) {
			if (conArray[j].condition) {
				errors.errorsObj[field].message.push(conArray[j].message);
			}
		}
		if (errors.errorsObj[field].message.length) {
			errors.hasError = true;
		} else {
			delete errors.errorsObj[field];
		}
		return errors;
	}

	return errors.hasError
		? errors
		: {
				hasError: false
		  };
}

export { validateForm };
