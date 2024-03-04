import RestaurantCoupounCard from "./RestaurantCoupounCard";

const RestaurantOffer = (props) => {
	const offerArray = props.data.offers;
	const { sla, costForTwoMessage } = props.newData;

	return (
		<section className="restaurantOffer">
			<section className="restaurantOfferTimeCostDetails">
				<p>{sla.slaString}</p>
				<p>{costForTwoMessage}</p>
			</section>
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
