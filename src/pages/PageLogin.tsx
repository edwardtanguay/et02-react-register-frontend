import { useState } from 'react';

interface IPageLoginProps {
	baseUrl: string;
}

export const PageLogin = (props: IPageLoginProps) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const { baseUrl } = props;
	return (
		<form>
			<fieldset>
				<div className="row">
					<label>Username</label>
					<div>
						<input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" />
					</div>
				</div>
				<div className="row">
					<label>Password</label>
					<div>
						<input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" />
					</div>
				</div>
				<div className="buttonRow">
					<button>Login</button>
				</div>
			</fieldset>
		</form>
	);
};
