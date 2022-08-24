import React, { useState } from 'react';
import axios from 'axios';
import { IUser } from '../interfaces';

interface IPageLoginProps {
	baseUrl: string;
	setCurrentUser: React.Dispatch<React.SetStateAction<IUser>>;
}

export const PageLogin = (props: IPageLoginProps) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const { baseUrl, setCurrentUser } = props;

	const handleLoginButton = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		(async () => {
			const data = (
				await axios.post(
					`${baseUrl}/login`,
					{ username },
					{ withCredentials: true }
				)
			).data;
			const _currentUser = data.currentUser;
			if (_currentUser.username === 'anonymousUser') {
				console.log('bad login');
			} else {
				setCurrentUser(data.currentUser);
				console.log(_currentUser);
			}
		})();
	};

	return (
		<form>
			<fieldset>
				<div className="row">
					<label>Username</label>
					<div>
						<input
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							type="text"
						/>
					</div>
				</div>
				<div className="row">
					<label>Password</label>
					<div>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type="text"
						/>
					</div>
				</div>
				<div className="buttonRow">
					<button onClick={handleLoginButton}>Login</button>
				</div>
			</fieldset>
		</form>
	);
};
