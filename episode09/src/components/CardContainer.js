import Card from "./Card";
import ShimmerContainer from "./ShimmerContainer";
const CardContainer = (props) => {
	// const uniqueKeyID = dataRestaurant[0].info.id;
	// console.log(dataRestaurant);/
	console.log("CardContainer", props);

	const uniqueKeyID = 12211;
	return (
		<section className="cardContainer">
			{props === null || props === undefined || props === false ? (
				<ShimmerContainer />
			) : // props.restaurants.map((element, index) => (
			// 	<Card
			// 		key={index + "resAPP" + uniqueKeyID}
			// 		propData={element}
			// 	/>
			// ))
			null}
		</section>
	);
};

export default CardContainer;
