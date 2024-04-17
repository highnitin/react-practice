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
	console.log("Hello from resetairant details", resInfo);

	// restaurant offer
	const offer = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle;

	const completeMenuInformationWithoutFilter =
		resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
			(element) => {
				return (
					element.card.card["@type"] ===
						"type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ||
					element.card.card["@type"] ===
						"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
				);
			}
		);

	return (
		<section className="bg-black w-7/12  shadow-md p-5 flex flex-col items-center">
			<h2 className="text-2xl text-gray-100 font-semibold m-5 border-b pb-2 border-gray-400">
				Welcome To {information.name}
			</h2>
			<RestaurantInfo data={information} />
			<RestaurantOffer
				data={offer}
				newData={information}
			/>
			<RestaurantMenu data={completeMenuInformationWithoutFilter} />
		</section>
	);
};

export default RestaurantDetails;
