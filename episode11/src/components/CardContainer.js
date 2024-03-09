import Card from "./Card";
import ShimmerContainer from "./ShimmerContainer";
import useNetworkStatus from "../utils/useNetworkStatus";
import offlineMeme from "../../learnings/offlineMeme.png";

const CardContainer = (props) => {
	// console.log("cardContainer", props);
	const networkStatus = useNetworkStatus();

	if (networkStatus === false)
		return (
			<section className="cardContainer offlineCardContainer">
				<h2>Oooop's you are offline</h2>
				<img
					src={offlineMeme}
					alt="Offline Meme"
					className="offlineMemeImage"
				/>
			</section>
		);

	const uniqueKeyID = 12211;
	return (
		<section className="cardContainer flex flex-wrap justify-center my-10 w-[80vw]">
			{props?.dataRestaurant === null ||
			props?.dataRestaurant === undefined ||
			props?.dataRestaurant === false ? (
				<ShimmerContainer />
			) : (
				props?.dataRestaurant?.restaurants.map((element, index) => (
					<Card
						key={index + "resAPP" + uniqueKeyID}
						propData={element}
					/>
				))
			)}
		</section>
	);
};

export default CardContainer;
