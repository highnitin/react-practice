import vegIcon from "../../learnings/vegIcon.png";
import nonVeg from "../../learnings/nonVeg.png";
import orangeStarIcon from "../../learnings/orangeStarIcon.png";
import { imageUrlForSingleMenu } from "../utils/constants";

const RestaurantSingleMenu = ({ individualMenuList }) => {
	const { isVeg, ribbon, name, defaultPrice, price, description, imageId } =
		individualMenuList.card.info;
	return (
		<section className="flex py-5 border-b-2 w-full space-x-4">
			<section className="flex flex-col w-9/12">
				<section className="flex items-center space-x-2">
					{isVeg ? (
						<img
							src={vegIcon}
							className="w-7"
						/>
					) : (
						<img
							src={nonVeg}
							className="w-7"
						/>
					)}

					{ribbon.text ? (
						<section className="flex space-x-1 items-center">
							<img
								src={orangeStarIcon}
								className="w-4 h-4"
							/>
							<p className="text-amber-700">{ribbon.text}</p>
						</section>
					) : null}
				</section>
				<p className="text-lg font-semibold">{name}</p>
				<p className="mb-2">₹{defaultPrice / 100 || price / 100}</p>
				<p className="">{description}</p>
			</section>
			{imageId ? (
				<section className="w-3/12 flex justify-center items-center">
					<section className="">
						<img
							className="object-cover w-32 h-28 rounded-lg"
							src={imageUrlForSingleMenu + imageId}
						/>
						<button className="bg-black border bg-opacity-25 font-bold px-3 py-1 rounded-lg relative -top-8 left-1/4 hover:bg-black text-white ">
							Add +
						</button>
					</section>
				</section>
			) : null}
		</section>
	);
};

export default RestaurantSingleMenu;
