import { useState } from "react";
import useRestaurantApiSearch from "../utils/useRestaurantApiSearch";

const SearchSection = ({ onFilter }) => {
	const restaurantData = useRestaurantApiSearch();

	const [inputValue, setInputValue] = useState("");

	const filterButtonSectionEvent = () => {
		const filteredData = restaurantData.filter(
			(res) => res.info.avgRating >= 4.4
		);
		onFilter(filteredData);
	};

	const ClearButtonSectionEvent = () => {
		const filteredData = restaurantData.filter((res) => res.info);
		onFilter(filteredData);
		setInputValue("");
	};

	const searchButtonClickEvent = () => {
		const filteredData = restaurantData.filter((res) =>
			res.info.name.toLowerCase().includes(inputValue.toLowerCase())
		);

		filteredData.length === 0 ? null : onFilter(filteredData);
		// console.log("Live Data", restaurantData);
	};

	const inputOnChangeEvent = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<section className="searchSection">
			<input
				type="text"
				name="name"
				placeholder="You're Fav food is waiting"
				className="inputSection"
				value={inputValue}
				onChange={inputOnChangeEvent}
			/>
			<button
				className="submitButtonSection"
				onClick={searchButtonClickEvent}
				value={"submit"}>
				Search Now!
			</button>
			<button
				className="filterButtonSection"
				onClick={filterButtonSectionEvent}>
				Filter the fukng best
			</button>

			<button
				className="filterButtonSection"
				onClick={ClearButtonSectionEvent}>
				Clear Filter
			</button>
		</section>
	);
};

export default SearchSection;
