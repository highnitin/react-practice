import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";

const NavBar = () => {
	const [currentState, setCurrentState] = useState("Login");
	let networkStatus = useNetworkStatus();

	useEffect(() => {}, [currentState]);

	const buttonClicked = () => {
		currentState === "Logout"
			? setCurrentState("Login")
			: setCurrentState("Logout");
	};
	return (
		<nav className="navBar">
			<ul className="navBarList">
				<li className="navBarListli">{networkStatus ? "🟢" : "🔴"}</li>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
				<li>
					<Link to="/blog">Blog</Link>
				</li>
				<li>
					<Link to="/cart">Cart</Link>
				</li>
				<li>
					<Link to="/grocery">Grocery</Link>
				</li>
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
