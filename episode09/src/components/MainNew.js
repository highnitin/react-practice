// import { useState, useEffect } from "react";
// import SearchSection from "./SearchSection";
// import CardContainer from "./CardContainer";
// import restaurantData from "../utils/demoData";

// const Main = () => {
// 	const [newRestaurantData, setNewRestaurantData] = useState(null);

// 	useEffect(() => {
// 		console.log("After Fetching");
// 		// fetchLiveData();
// 	}, []);

// 	const fetchLiveData = async () => {
// 		const fetchData = await fetch(
// 			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1372529&lng=79.058856&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
// 		);
// 		const response = await fetchData.json();
// 		setNewRestaurantData(
// 			response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
// 		);
// 		console.log(
// 			"Received Data",
// 			response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
// 		);
// 	};

// 	console.log("Body Rendered");
// 	console.log(restaurantData);
// 	// const handleFilter = (data) => {
// 	// 	setNewRestaurantData(data);
// 	// };

// 	return (
// 		<main className="mainSection">
// 			{/* <SearchSection onFilter={handleFilter} /> */}
// 			{/* Step 1: Pass onFilter callback */}
// 			<CardContainer
// 				newRestaurantData={restaurantData}
// 				// Step 5: Pass filteredData to CardContainer
// 			/>
// 		</main>
// 	);
// };

// export default Main;
