const CardRating = (props) => {
	const { finalRating } = props;
	let rating = finalRating + "/5.0";
	return <h3 className="cardRating text-base text-yellow-500">{rating}</h3>;
};

export default CardRating;
