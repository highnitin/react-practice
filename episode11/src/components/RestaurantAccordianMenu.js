import RestaurantSingleMenu from "./RestaurantSingleMenu";
import down from "../../learnings/down.png";
import upArrow from "../../learnings/upArrow.png";

const RES_IMAGE_URL =
	"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

const RestaurantAccordianMenu = ({ menuList }) => {
	// console.log("CompleteMenuInformation", menuList.card.card);

	const { title, itemCards } = menuList?.card?.card;
	return (
		<section className="bg-white p-2 my-4 text-black rounded-sm">
			<section className="cursor-pointer p-3 flex justify-between border-b-2 items-center">
				<p className="text-lg font-bold">
					{title} ({itemCards.length})
				</p>
				<img
					src={down}
					className="w-7"
				/>
			</section>
			<section className="p-3">
				{itemCards.map((element) => (
					<RestaurantSingleMenu individualMenuList={element} />
				))}
			</section>
		</section>
	);
};

export default RestaurantAccordianMenu;
