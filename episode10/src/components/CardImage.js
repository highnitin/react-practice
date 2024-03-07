import { CARD_IMG } from "../utils/constants";
import { FALLBACK_CARD_IMG } from "../utils/constants";
import { IMG_ERR } from "../utils/constants";

const CardImage = (props) => {
	let imageURL = CARD_IMG + props.url;
	if (props.url === IMG_ERR) {
		imageURL = FALLBACK_CARD_IMG;
	}
	return (
		<img
			className="cardImg w-full min-h-52 bg-cover"
			src={imageURL}
			alt="Image Food Dish"
		/>
	);
};

export default CardImage;
