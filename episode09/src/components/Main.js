import React from "react";
import CardContainer from "./CardContainer";
import { useState } from "react";
import SearchSection from "./SearchSection";
import useRestaurantApi from "../utils/useRestaurantApi";
import ShimmerContainer from "./ShimmerContainer";

const Main = () => {
	const restaurantInfo = useRestaurantApi();
	console.log("restaurantinfo from main", restaurantInfo);
	const { newRestaurantInfo, setNewRestaurantInfo } = useState(restaurantInfo);
	console.log("new restaurantinfo from main", newRestaurantInfo);

	if (newRestaurantInfo === null) return <ShimmerContainer />;

	const handleFilter = (data) => {
		setNewRestaurantInfo(data);
	};
	// console.log(restaurantInfo);

	return (
		<main className="mainSection">
			<SearchSection onFilter={handleFilter} />
			<CardContainer dataRestaurant={newRestaurantInfo} />
		</main>
	);
};

export default Main;
