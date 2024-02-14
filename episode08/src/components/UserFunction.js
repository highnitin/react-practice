const UserFunction = (props) => {
	// console.log(props);
	const { name, description, location, skills } = props;
	return (
		<section className="user">
			<section className="userFunction">
				<p>Name - {name}</p>
				<p>Description - {description}</p>
				<p>Location - {location}</p>
				<p>Skills - {skills}</p>
			</section>
		</section>
	);
};

export default UserFunction;
