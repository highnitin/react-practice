import RestaurantCoupounCard from "./RestaurantCoupounCard";

const RestaurantOffer = (props) => {
	const offerArray = props.data.offers;

	return (
		<section className="restaurantOffer">
			<section className="coupounCardContainer">
				{offerArray.map((element) => (
					<RestaurantCoupounCard
						key={element.info.offerIds[0]}
						data={element}
					/>
				))}
			</section>
		</section>
	);
};

export default RestaurantOffer;
