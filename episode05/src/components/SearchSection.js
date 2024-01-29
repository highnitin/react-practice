const SearchSection = () => {
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
		</section>
	);
};

export default SearchSection;
