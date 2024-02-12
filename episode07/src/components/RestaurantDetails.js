import { useEffect, useState } from "react";
import ShimmerContainer from "./ShimmerContainer";

const RestaurantDetails = () => {
	const [restaurantData, setRestaurantData] = useState(null);

	useEffect(() => {
		fetchRestaurantDetails();
	}, []);

	// console.log("body rendered");

	const fetchRestaurantDetails = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1458004&lng=79.0881546&restaurantId=53419"
		);
		const response = await data.json();
		// console.log(response.data.cards[0].card.card.info);

		setRestaurantData(response.data);
	};

	if (restaurantData === null) return <ShimmerContainer />;
	// console.log(restaurantData);
	const { name, cuisines, locality, areaName, sla, costForTwoMessage } =
		restaurantData?.cards[0]?.card?.card?.info;
	// console.log(name);
	const { header, couponCode, description } =
		restaurantData?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers[0]
			?.info;

	// console.log(restaurantData?cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card.info);

	// console.log(
	// 	restaurantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
	// 		?.card?.itemCards[0]?.card
	// );
	const { info } =
		restaurantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
			?.card?.itemCards[0]?.card;

	const RES_IMAGE_URL =
		"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,e_grayscale,c_fit/";

	console.log(info);

	// name, imageId, description, category, itemAttribute.vegClassifier
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
					<section className="coupounCard">
						<h2 className="couponCardHeading">{header}</h2>
						<p className="couponCardDescription">
							{couponCode} | {description}
						</p>
					</section>
					<section className="coupounCard">
						<h2 className="couponCardHeading">{header}</h2>
						<p className="couponCardDescription">
							{couponCode} | {description}
						</p>
					</section>
				</section>
			</section>
			<section className="restaurantMenu">
				<h2 className="restaurantRecommendation">Recommended (20)</h2>
				<section className="restaurantSingleMenu">
					<section className="restaurantSingleMenuInfo">
						<p>Veg</p>
						<p>{info.name}</p>
						<p>₹ {info.price / 100}</p>
						<p>{info.description}</p>
						<p>{info.itemAttribute.vegClassifier}</p>
					</section>
					<section className="restaurantSingleMenuImage">
						<img src={RES_IMAGE_URL + info.imageId} />
						<p>Image</p>
					</section>
				</section>
			</section>
		</section>
	);
};

export default RestaurantDetails;
