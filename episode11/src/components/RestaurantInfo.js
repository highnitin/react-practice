import greenStarIcon from "../../learnings/greenStarIcon.png";

const RestaurantInfo = (props) => {
	const {
		name,
		cuisines,
		locality,
		areaName,
		sla,
		totalRatingsString,
		avgRatingString,
	} = props.data;

	return (
		<section className="w-full flex justify-between border-b-2 border-pink-400 border-dotted py-5">
			<section className="w-10/12 justify-between">
				<h2 className="text-2xl font-semibold mb-2 text-red-400">{name}</h2>
				<p className="text-gray-300">{cuisines.join(", ")}</p>
				<p className="text-gray-300">
					{locality ? locality : null}
					{areaName ? ", " + areaName : null}
					{sla.lastMileTravelString ? " | " + sla.lastMileTravelString : null}
				</p>
			</section>

			<section className="w-auto flex flex-col items-center justify-evenly border border-gray-400 rounded-md px-2">
				<section className="flex justify-center items-center space-x-1">
					<img
						src={greenStarIcon}
						className="w-auto h-4"
					/>
					<p className="text-md font-semibold text-green-500">
						{avgRatingString}
					</p>
				</section>
				<span className="border-b-2 border-gray-400 w-full"> </span>
				<p className="text-[11px] font-semibold text-gray-300">
					{totalRatingsString}
				</p>
			</section>
		</section>
	);
};

export default RestaurantInfo;
