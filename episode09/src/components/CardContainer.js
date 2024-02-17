import Card from "./Card";
import ShimmerContainer from "./ShimmerContainer";
const CardContainer = (props) => {
	// console.log("PropsData", props);

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
