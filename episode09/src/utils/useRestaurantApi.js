import { useState, useEffect } from "react";

const useRestaurantApi = () => {
	const [filteredRestaurantList, setFilteredRestaurantList] = useState(null);

	// const { res, setRes } = useState(null);
	// console.log("resvalue", res);
	// setRes(5);
	// console.log("resvalue", res);

	useEffect(() => {
		console.log("useEffect Rendered");
		fetchLiveData();
	}, []);

	const fetchLiveData = async () => {
		const fetchData = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1372529&lng=79.058856&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const response = await fetchData.json();
		// setNewRestaurantData(
		// 	response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
		// 		?.restaurants
		// );
		// console.log(
		// 	"API response",
		// 	response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
		// );
		setFilteredRestaurantList(
			response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
		);
		// console.log("newResData", newRestaurantData);
	};
	// fetchLiveData();

	// console.log("Filteredreslist", filteredRestaurantList);
	return filteredRestaurantList;
};

export default useRestaurantApi;
