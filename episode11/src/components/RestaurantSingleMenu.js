const RES_IMAGE_URL =
	"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

const RestaurantSingleMenu = ({ data }) => {
	console.log("CompleteMenuInformation", data);

	const { name, price, description, itemAttribute, imageId, defaultPrice } =
		props.data.card?.info || props.data.dish?.info;
	return (
		<section className="restaurantSingleMenu">
			<section className="restaurantSingleMenuInfo">
				<p>{itemAttribute.vegClassifier}</p>
				<p>{name}</p>
				<p>₹ {price ? price / 100 : defaultPrice / 100}</p>
				<p>{description}</p>
			</section>
			<section className="restaurantSingleMenuImage">
				<img src={RES_IMAGE_URL + imageId} />
			</section>
		</section>
	);
};

export default RestaurantSingleMenu;
