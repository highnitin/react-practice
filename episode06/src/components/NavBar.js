import { useState } from "react";

const NavBar = () => {
	const [currentState, setCurrentState] = useState("Login");

	const buttonClicked = () => {
		currentState === "Logout"
			? setCurrentState("Login")
			: setCurrentState("Logout");
	};
	return (
		<nav className="navBar">
			<ul className="navBarList">
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
				<li>Blog</li>
				<li>Cart</li>
				<li>
					<button
						className="loginButton"
						onClick={buttonClicked}>
						{currentState}
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
