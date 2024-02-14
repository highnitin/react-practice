const CardRating = (props) => {
	const { finalRating } = props;
	let rating = finalRating + "/5.0";
	return <h3 className="cardRating">{rating}</h3>;
};

export default CardRating;
