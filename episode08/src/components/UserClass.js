import React from "react";

class UserClasss extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { name, description, location, skills } = this.props.data;
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
	}
}

export default UserClasss;
