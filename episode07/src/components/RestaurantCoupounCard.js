const RestaurantCoupounCard = (props) => {
	const { header, couponCode, description } = props.data.info;
	return (
		<section className="coupounCard">
			<h2 className="couponCardHeading">{header}</h2>
			<p className="couponCardDescription">
				{couponCode} | {description}
			</p>
		</section>
	);
};

export default RestaurantCoupounCard;
