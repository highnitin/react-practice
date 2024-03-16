import { useState } from "react";
import useRestaurantApiSearch from "../utils/useRestaurantApiSearch";

const SearchSection = ({ onFilter }) => {
	const restaurantData = useRestaurantApiSearch();

	const [inputValue, setInputValue] = useState("Pizza");

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
	};

	const inputOnChangeEvent = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<section className="searchSection flex space-x-10">
			<input
				type="text"
				name="name"
				placeholder="You're Fav food is waiting"
				className="inputSection rounded-md text-black px-5"
				value={inputValue}
				onChange={inputOnChangeEvent}
			/>
			<button
				className="submitButtonSection bg-white text-black px-5 py-2 rounded-md hover:bg-gray-400 hover:text-white"
				onClick={searchButtonClickEvent}
				value={"submit"}>
				Search Now!
			</button>
			<button
				className="filterButtonSection bg-white text-black px-5 py-2 rounded-md hover:bg-gray-400 hover:text-white"
				onClick={filterButtonSectionEvent}>
				Filter the fukng best
			</button>

			<button
				className="filterButtonSection bg-white text-black px-5 py-2 rounded-md hover:bg-gray-400 hover:text-white"
				onClick={ClearButtonSectionEvent}>
				Clear Filter
			</button>
		</section>
	);
};

export default SearchSection;
