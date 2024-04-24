import { useState, useEffect } from "react";
import { RES_API } from "./constants";

const useRestaurantApi = () => {
	const [filteredRestaurantList, setFilteredRestaurantList] = useState(null);

	useEffect(() => {
		fetchLiveData();
	}, []);

	const fetchLiveData = async () => {
		const fetchData = await fetch(RES_API);
		const response = await fetchData.json();
		// console.log("response", response.data.cards);
		// console.log(
		// 	"Hello from useRestaurantAPI",
		// 	response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
		// 		?.restaurants
		// );
		setFilteredRestaurantList(
			response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
		);
	};
	// console.log("filteredRestaurantList", filteredRestaurantList);
	return filteredRestaurantList;
};

export default useRestaurantApi;
