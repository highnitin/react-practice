const CardFoodType = (props) => {
	let resultFinal = <h3>{}</h3>;
	let { finalFoodType } = props;
	if (!finalFoodType || undefined) {
		finalFoodType = "Non-Veg";
		resultFinal = (
			<h3 className="cardPriceNonVeg text-base text-red-500">
				{finalFoodType}
			</h3>
		);
	} else {
		finalFoodType = "Veg";
		resultFinal = (
			<h3 className="cardPriceVeg text-base text-green-500">{finalFoodType}</h3>
		);
	}
	return resultFinal;
};

export default CardFoodType;
