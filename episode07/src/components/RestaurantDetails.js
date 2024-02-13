import { useEffect, useState } from "react";
import ShimmerContainer from "./ShimmerContainer";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantOffer from "./RestaurantOffer";
import RestaurantMenu from "./RestaurantMenu";
import { Routes, Route, useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantDetails = () => {
	let { resId } = useParams();
	// console.log(resId);
	const [restaurantData, setRestaurantData] = useState(null);

	useEffect(() => {
		fetchRestaurantDetails();
	}, []);

	const fetchRestaurantDetails = async () => {
		const data = await fetch(MENU_API + resId);
		const response = await data.json();
		setRestaurantData(response.data);
	};

	if (restaurantData === null) return <ShimmerContainer />;

	// restaurant information
	const information = restaurantData?.cards[0]?.card?.card?.info;

	// restaurant offer
	const offer =
		restaurantData?.cards[1]?.card?.card?.gridElements?.infoWithStyle;

	// restaurant menu
	const menuInformation =
		restaurantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
			?.card;

	return (
		<section className="restaurantDetails">
			<h2>Restaurant Page</h2>
			<RestaurantInfo data={information} />
			<RestaurantOffer data={offer} />
			<RestaurantMenu data={menuInformation} />
		</section>
	);
};

export default RestaurantDetails;
