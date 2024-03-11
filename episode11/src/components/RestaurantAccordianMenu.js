import RestaurantSingleMenu from "./RestaurantSingleMenu";

const RES_IMAGE_URL =
	"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

const RestaurantAccordianMenu = ({ menuList }) => {
	// console.log("CompleteMenuInformation", menuList.card.card);

	const { title, itemCards } = menuList?.card?.card;
	return (
		<section className="restaurantSingleMenu">
			<section className="restaurantSingleMenuInfo">
				<p>
					{title} ({itemCards.length})
				</p>
			</section>
			<section className="restaurantSingleMenuImage">
				{itemCards.map((element) => (
					<RestaurantSingleMenu individualMenuList={itemCards} />
				))}
			</section>
		</section>
	);
};

export default RestaurantAccordianMenu;
