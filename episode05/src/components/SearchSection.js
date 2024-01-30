import restaurantData from "../utils/demoData";

const SearchSection = ({ onFilter }) => {
	const filterButtonSectionEvent = () => {
		const filteredData = restaurantData.filter(
			(res) => res.card.card.info.avgRating >= 4.4
		);
		onFilter(filteredData);
	};

	const ClearButtonSectionEvent = () => {
		const filteredData = restaurantData.filter((res) => res.card.card.info);
		onFilter(filteredData);
	};

	return (
		<section className="searchSection">
			<form
				id="formSection"
				className="formSection">
				<input
					type="text"
					name="name"
					placeholder="You're Fav food is waiting"
					className="inputSection"
				/>
				<input
					type="submit"
					value="Submit"
					className="submitButtonSection"
					disabled
				/>
			</form>
			<button
				className="filterButtonSection"
				// Step 2: Handle click event
				onClick={filterButtonSectionEvent}>
				Filter the fukng best
			</button>

			<button
				className="filterButtonSection"
				onClick={ClearButtonSectionEvent}
				// Step 2: Handle clear click event (Add on)
			>
				Clear Filter
			</button>
		</section>
	);
};

export default SearchSection;
