import React from "react";
import "../css/Input.css";

const Input = props => {
	const {
		type,
		value,
		id,
		name,
		label,
		placeholder,
		errors,
		onChange
	} = props;
	return (
		<div className="inputContainer">
			<div className="inputWrapper">
				<label htmlFor={id}>{label}</label>
				<input
					id={id}
					name={name}
					type={type}
					value={value}
					placeholder={placeholder}
					onChange={ev => onChange && onChange(ev)}
				/>
			</div>
			{errors && errors.errorsObj[name] && (
				<div className="error-wrapper">
					<p className="error">{errors.errorsObj[name].message}</p>
				</div>
			)}
		</div>
	);
};

export default Input;
