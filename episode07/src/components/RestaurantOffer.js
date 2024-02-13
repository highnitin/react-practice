import RestaurantCoupounCard from "./RestaurantCoupounCard";

const RestaurantOffer = (props) => {
	const offerArray = props.data.offers;
	// console.log(offerArray);
	return (
		<section className="restaurantOffer">
			<section className="coupounCardContainer">
				{offerArray.map((element) => (
					<RestaurantCoupounCard
						key={element.info.offerIds}
						data={element}
					/>
				))}
			</section>
		</section>
	);
};

export default RestaurantOffer;
