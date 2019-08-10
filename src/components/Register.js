import React from 'react';
import { useSelector } from 'react-redux';

const Register = function({
	handleRegisterSubmit,
	handleRegisterNameChange,
	handleRegisterEmailChange,
	handleRegisterPasswordChange
}) {
	const registerNameQuery = useSelector((state) => state.registerName);
	const registerEmailQuery = useSelector((state) => state.registerEmail);
	const registerPasswordQuery = useSelector((state) => state.registerPassword);

	return (
		<div className="Register">
			<h1>Something register</h1>
			<form onSubmit={handleRegisterSubmit}>
				<div className="form__field">
					<label className="form__label">Name</label>
					<input
						type="text"
						value={registerNameQuery}
						onChange={handleRegisterNameChange}
						placeholder="name"
					/>
				</div>
				<div className="form__field">
					<label className="form__label">Name</label>
					<input
						type="text"
						value={registerEmailQuery}
						onChange={handleRegisterEmailChange}
						placeholder="email"
					/>
				</div>
				<div className="form__field">
					<label className="form__label">Name</label>
					<input
						type="password"
						value={registerPasswordQuery}
						onChange={handleRegisterPasswordChange}
						placeholder="password"
					/>
				</div>

				<button type="submit">REGISTER &rarr;</button>
			</form>
		</div>
	);
};

export default Register;
