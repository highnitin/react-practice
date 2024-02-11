const RestaurantDetails = () => {
	const fetchRestaurantDetails = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1458004&lng=79.0881546&restaurantId=53419"
		);
		const response = await data.json();
		console.log(response);
	};

	fetchRestaurantDetails();

	return (
		<section className="restaurantDetails">
			<h2>Restaurant Page</h2>

			<section className="restaurantInfo">
				<h2 className="restaurantName">HaldiRam</h2>
				<p className="restaurantCuisine">Indian, Chinese, Italian</p>
				<p className="restaurantAddress">Shankar Nagar, 2.5 KM</p>
			</section>
			<section className="restaurantOffer">
				<h2 className="restauranDeliveryTime">20-30 Mins</h2>
				<p className="restaurantCostForTwo">Rs. 250 for two</p>
				<section className="coupounCardContainer">
					<p className="coupounCard">
						20% off up to ₹125 | Use KOTAK125 Above ₹500
					</p>
					<p className="coupounCard">
						20% off up to ₹125 | Use KOTAK125 Above ₹500
					</p>
				</section>
			</section>
			<section className="restaurantMenu">
				<h2 className="restaurantRecommendation">Recommended (20)</h2>
				<section className="restaurantSingleMenu">
					<section className="restaurantSingleMenuInfo">
						<p>Veg</p>
						<p>Golgappa + (Serves 1-2)</p>
						<p>Rs. 59</p>
						<p>Painipuri is a famous dish in nagpur from Haldiram</p>
					</section>
					<section className="restaurantSingleMenuImage">
						<p>Image</p>
					</section>
				</section>
			</section>
		</section>
	);
};

export default RestaurantDetails;
