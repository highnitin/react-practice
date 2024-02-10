// console.log("NavBar Rendered 5");
import { useEffect, useState } from "react";

const NavBar = () => {
	const [currentState, setCurrentState] = useState("Login");

	// console.log("NavBar Rendered 1");/
	console.log("NavBar Rendered");

	// useEffect(() => {
	// 	console.log("Inside UseEffect");
	// });
	// if the dependency [] is not passed useEffect(callback fn) => useEffect will be called each time when the component renders.

	// useEffect(() => {
	// 	console.log("Inside UseEffect");
	// }, []);
	// if the dependency [] is empty array useEffect(callback fn, []) => useEffect will be called only once we the component renders for the 1st time.

	useEffect(() => {
		console.log("Inside UseEffect");
	}, [currentState]);
	// if the dependency [something] is not empty array useEffect(callback fn, [something]) => useEffect will be called each time when the value of dependency updates.

	// Remember useEffect is called once on all conditions.

	const buttonClicked = () => {
		currentState === "Logout"
			? setCurrentState("Login")
			: setCurrentState("Logout");
	};
	// console.log("NavBar Rendered 2");
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
// console.log("NavBar Rendered 3");

export default NavBar;
// console.log("NavBar Rendered 4");
