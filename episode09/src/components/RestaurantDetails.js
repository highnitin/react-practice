import ShimmerContainer from "./ShimmerContainer";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantOffer from "./RestaurantOffer";
import RestaurantMenu from "./RestaurantMenu";
import { useParams } from "react-router-dom";
import useRestaurantMenuApi from "../utils/useRestaurantMenuApi";

const RestaurantDetails = () => {
	let { resId } = useParams();

	const resInfo = useRestaurantMenuApi(resId);

	if (resInfo === null) return <ShimmerContainer />;

	// restaurant information
	const information = resInfo?.cards[2]?.card?.card?.info;

	// restaurant offer
	const offer = resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle;

	// restaurant menu
	const menuInformation =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;

	return (
		<section className="restaurantDetails">
			<h2>Restaurant Page</h2>
			<RestaurantInfo data={information} />
			<RestaurantOffer
				data={offer}
				newData={information}
			/>
			<RestaurantMenu data={menuInformation} />
		</section>
	);
};

export default RestaurantDetails;
