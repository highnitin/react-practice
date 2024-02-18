const RestaurantInfo = (props) => {
	const {
		name,
		cuisines,
		locality,
		areaName,
		sla,
		costForTwoMessage,
		totalRatingsString,
		avgRatingString,
	} = props.data;

	return (
		<section className="restaurantInfo">
			<section className="restaurantInfoGeneric">
				<h2 className="restaurantName">{name}</h2>
				<p className="restaurantCuisine">{cuisines.join(", ")}</p>
				<p className="restaurantAddress">
					{locality ? locality : null}
					{areaName ? ", " + areaName : null}
					{sla.lastMileTravelString ? "| " + sla.lastMileTravelString : null}
				</p>
			</section>

			<section className="restaurantInfoRatings">
				<p>{avgRatingString}</p>
				<p>{totalRatingsString}</p>
			</section>
		</section>
	);
};

export default RestaurantInfo;
