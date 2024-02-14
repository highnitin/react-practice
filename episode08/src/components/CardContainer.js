import Card from "./Card";
import ShimmerContainer from "./ShimmerContainer";
const CardContainer = ({ dataRestaurant }) => {
	// const uniqueKeyID = dataRestaurant[0].info.id;
	// console.log(dataRestaurant);/

	const uniqueKeyID = 12211;
	return (
		<section className="cardContainer">
			{dataRestaurant.length === 0 ? <ShimmerContainer /> : null}
			{dataRestaurant.map((element, index) => (
				<Card
					key={index + "resAPP" + uniqueKeyID}
					propData={element}
				/>
			))}
		</section>
	);
};

export default CardContainer;
