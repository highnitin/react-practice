import Card from "./Card";
import ShimmerContainer from "./ShimmerContainer";
import useNetworkStatus from "../utils/useNetworkStatus";
const CardContainer = (props) => {
	const networkStatus = useNetworkStatus();
	console.log("NS", networkStatus);

	if (networkStatus === "offline")
		return (
			<section className="cardContainer">
				<h1>Oooop's you are offline</h1>
			</section>
		);

	const uniqueKeyID = 12211;
	return (
		<section className="cardContainer">
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
