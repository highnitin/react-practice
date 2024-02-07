// CardHeading component
import { CARD_IMG } from "../utils/constants";
import { FALLBACK_CARD_IMG } from "../utils/constants";
import { IMG_ERR } from "../utils/constants";

const NewCard = (props) => {
	// console.log("Hie", props.propData[0].info);
	console.log(props.propData);
	// console.log("Hie", props.propData.card.card.info);
	// const {
	// 	name,
	// 	cloudinaryImageId,
	// 	costForTwo,
	// 	cuisines,
	// 	locality,
	// 	areaName,
	// 	veg,
	// 	avgRating,
	// 	sla,
	// } = props.propData.info;
	// console.log("I'm here", name);
	// let imageURL = CARD_IMG + cloudinaryImageId;
	// if (cloudinaryImageId === IMG_ERR) {
	// 	imageURL = FALLBACK_CARD_IMG;
	// }

	// let resultFinal = <h3>{}</h3>;
	// let finalFoodType = veg;
	// if (!finalFoodType || undefined) {
	// 	finalFoodType = "Non-Veg";
	// 	resultFinal = <h3 className="cardPriceNonVeg">{finalFoodType}</h3>;
	// } else {
	// 	finalFoodType = "Veg";
	// 	resultFinal = <h3 className="cardPriceVeg">{finalFoodType}</h3>;
	// }

	// let rating = avgRating + "/5.0";

	// const completeAddress = locality + ", " + areaName;

	return (
		<section className="card">
			<h1> Hello Developer</h1>
			{/* <img
				className="cardImg"
				src={imageURL}
				alt="Image Food Dish"
			/>

			<h2 className="cardHeading">{name}</h2>
			<h2 className="cardPriceForTwo">{costForTwo}</h2>

			<section className="featureSection">
				{resultFinal}
				<h3 className="cardRating">{rating}</h3>
				<h3 className="cardETA">{sla.slaString}</h3>
			</section>

			<h3 className="cardCuisineList">{cuisines.join(", ")}</h3>
			<h3 className="cardAddress">{completeAddress}</h3>
			<h3 className="cardAddress">{completeAddress}</h3> */}
		</section>
	);
};

export default NewCard;
