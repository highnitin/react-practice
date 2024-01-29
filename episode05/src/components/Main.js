import React, { useState } from "react";
import SearchSection from "./SearchSection";
import CardContainer from "./CardContainer";
import restaurantData from "../utils/demoData";

const Main = () => {
	const [filteredData, setFilteredData] = useState(null); // Step 6: Use useState

	const handleFilter = (data) => {
		setFilteredData(data); // Step 5: Update filteredData state
	};

	return (
		<main className="mainSection">
			<SearchSection onFilter={handleFilter} />{" "}
			{/* Step 1: Pass onFilter callback */}
			<CardContainer
				newRestaurantData={filteredData || restaurantData} // Step 5: Pass filteredData to CardContainer
			/>
		</main>
	);
};

export default Main;
