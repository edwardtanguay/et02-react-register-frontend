interface IPageLoginProps {
	baseUrl: string;
}

export const PageLogin = (props: IPageLoginProps) => {
	const { baseUrl } = props;
	return (
		<form>
			<fieldset>
				<div className="row">
					<label>Username</label>
					<div>
						<input type="text" />
					</div>
				</div>
				<div className="row">
					<label>Password</label>
					<div>
						<input type="password" />
					</div>
				</div>
				<div className="buttonRow">
					<button>Login</button>
				</div>
			</fieldset>
		</form>
	);
};
