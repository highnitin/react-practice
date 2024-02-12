import { useEffect, useState } from "react";
import ShimmerContainer from "./ShimmerContainer";

const RestaurantDetails = () => {
	const [restaurantData, setRestaurantData] = useState();

	useEffect(() => {
		fetchRestaurantDetails();
	}, []);

	// console.log("body rendered");

	const fetchRestaurantDetails = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1458004&lng=79.0881546&restaurantId=53419"
		);
		const response = await data.json();
		console.log(response.cards[0].card.card.info);

		setRestaurantData(response.data);
	};
	// console.log(restaurantData);

	// restaurantData.length === 0 ? <ShimmerContainer /> : null;

	// const { name, cuisines, locality, areaName, sla, costForTwoMessage } =
	// 	restaurantData.data.cards[0].card.card.info;
	// const {} = restaurantData.data.cards[1].card.card.info;
	console.log(name);

	return (
		<section className="restaurantDetails">
			<h2>Restaurant Page</h2>

			<section className="restaurantInfo">
				<h2 className="restaurantName">{name}</h2>
				<p className="restaurantCuisine">{cuisines.join(", ")}</p>
				<p className="restaurantAddress">
					{locality}, {areaName} | {sla.lastMileTravelString}
				</p>
			</section>
			<section className="restaurantOffer">
				<h2 className="restauranDeliveryTime">{sla.slaString}</h2>
				<p className="restaurantCostForTwo">{costForTwoMessage}</p>
				<section className="coupounCardContainer">
					<p className="coupounCard">
						20% off up to ₹125 | Use KOTAK125 Above ₹500
					</p>
					<p className="coupounCard">
						20% off up to ₹125 | Use KOTAK125 Above ₹500
					</p>
				</section>
			</section>
			<section className="restaurantMenu">
				<h2 className="restaurantRecommendation">Recommended (20)</h2>
				<section className="restaurantSingleMenu">
					<section className="restaurantSingleMenuInfo">
						<p>Veg</p>
						<p>Golgappa + (Serves 1-2)</p>
						<p>Rs. 59</p>
						<p>Painipuri is a famous dish in nagpur from Haldiram</p>
					</section>
					<section className="restaurantSingleMenuImage">
						<p>Image</p>
					</section>
				</section>
			</section>
		</section>
	);
};

export default RestaurantDetails;
