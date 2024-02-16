import { useEffect, useState } from "react";

const UserFunction = (props) => {
	// console.log(props);
	const { name, description, location, skills, count } = props;
	const [newCount, setNewCount] = useState(count);
	const onClickIncrement = () => {
		// console.log("click inside functional component");
		setNewCount(newCount + 1);
	};
	useEffect(() => {
		const timer = setInterval(() => {
			// console.log("Hello from functional component.");
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, []);
	return (
		<section className="user">
			<section className="userFunction">
				<p>Func Component</p>
				<p>Name - {name}</p>
				<p>Description - {description}</p>
				<p>Location - {location}</p>
				<p>Skills - {skills}</p>
				<p>Count - {newCount}</p>
				<button onClick={onClickIncrement}>Increase Count</button>
			</section>
		</section>
	);
};

export default UserFunction;
