import React from "react";
import CardContainer from "./CardContainer";
import { useState } from "react";
import SearchSection from "./SearchSection";
import useRestaurantApi from "../utils/useRestaurantApi";
// import ShimmerContainer from "./ShimmerContainer";

const Main = () => {
	const restaurantInfo = useRestaurantApi();
	const [newRestaurantInfo, setNewRestaurantInfo] = useState();
	const handleFilter = (restaurants) => {
		// console.log("data", { restaurantsList });
		// console.log("type of data", typeof restaurantsList);
		setNewRestaurantInfo({ restaurants });
	};
	// console.log("restaurantInfo", restaurantInfo?.restaurants);
	// console.log("newRestaurantInfo", newRestaurantInfo?.restaurants);

	return (
		<main className="mainSection">
			<SearchSection onFilter={handleFilter} />
			<CardContainer
				dataRestaurant={newRestaurantInfo ? newRestaurantInfo : restaurantInfo}
			/>
		</main>
	);
};

export default Main;
