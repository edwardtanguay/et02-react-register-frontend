import React, { useState } from 'react';
import axios from 'axios';
import { IUser } from '../interfaces';
import { useNavigate } from 'react-router-dom';

interface IPageLoginProps {
	baseUrl: string;
	setCurrentUser: React.Dispatch<React.SetStateAction<IUser>>;
}

export const PageLogin = (props: IPageLoginProps) => {
	const [formMessage, setFormMessage] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const { baseUrl, setCurrentUser } = props;

	const navigate = useNavigate();

	const handleLoginButton = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		(async () => {
			const data = (
				await axios.post(
					`${baseUrl}/login`,
					{ username, password },
					{ withCredentials: true }
				)
			).data;
			const _currentUser = data.currentUser;
			if (_currentUser.username === 'anonymousUser') {
				setFormMessage('bad login');
			} else {
				setCurrentUser(data.currentUser);
				navigate('/members');
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
							autoFocus
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
					<div className="formMessage">{formMessage}</div>
					<button onClick={handleLoginButton}>Login</button>
				</div>
			</fieldset>
		</form>
	);
};
