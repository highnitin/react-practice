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
	const information = resInfo?.cards[0]?.card?.card?.info;
	console.log(information.name);
	// restaurant offer
	const offer = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle;

	// restaurant menu
	const menuInformation =
		resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;

	const completeMenuInformation =
		resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
			(element) =>
				element.card.card["@type"] ==
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		);

	return (
		<section className="bg-black w-7/12 border border-purple-300 shadow-md p-5 flex flex-col items-center">
			<h2 className="text-2xl text-gray-100 font-semibold m-5 border-b pb-2 border-gray-400">
				Welcome To {information.name}
			</h2>
			<RestaurantInfo data={information} />
			<RestaurantOffer
				data={offer}
				newData={information}
			/>
			<RestaurantMenu data={completeMenuInformation} />
		</section>
	);
};

export default RestaurantDetails;