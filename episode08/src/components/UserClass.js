import React from "react";

class UserClasss extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count1: 0,
			count2: 0,
		};
		console.log("Child constructor");
	}

	componentDidMount() {
		console.log(this.props.name, "Child component did mount");
	}

	render() {
		console.log("Child render");
		// console.log(this.sprops);
		const { name, description, location, skills } = this.props;
		const { count1, count2 } = this.state;
		const onClickIncrement = () => {
			this.setState({
				count1: this.state.count1 + 1,
				count2: this.state.count2 + 10,
			});
		};
		return (
			<section className="user">
				<section className="userFunction">
					<p>Class Component</p>
					<p>Name - {name}</p>
					<p>Description - {description}</p>
					<p>Location - {location}</p>
					<p>Skills - {skills}</p>
					<p>Count - {count1}</p>
					<p>Count - {count2}</p>
					<button onClick={onClickIncrement}>Increase Count</button>
				</section>
			</section>
		);
	}
}

export default UserClasss;
