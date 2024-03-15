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
		setFilteredRestaurantList(
			response?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
		);
	};
	// console.log("filteredRestaurantList", filteredRestaurantList);
	return filteredRestaurantList;
};

export default useRestaurantApi;
