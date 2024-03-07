// CardHeading component
const CardHeading = (props) => {
	const { heading } = props;
	return <h2 className="cardHeading text-xl text-red-300">{heading}</h2>;
};

export default CardHeading;
