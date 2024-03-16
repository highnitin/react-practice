const RestaurantCoupounCard = (props) => {
	const imageUrlForCoupon =
		"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/";
	const { header, couponCode, description, offerLogo, offerTag } =
		props.data.info;
	let slugForFun;
	{
		offerLogo === "offers/generic"
			? (slugForFun = "offers/generic")
			: (slugForFun = offerLogo);
	}

	let imgSlug = imageUrlForCoupon + offerLogo;
	return (
		<section className="flex border border-gray-300 rounded-lg min-w-52 px-2 py-1 justify-start cursor-pointer">
			{offerTag ? (
				<p className="vlr text-xs text-gray-400 -rotate-180 border-l-2 mr-2 text-red-200 text-center">
					{offerTag}
				</p>
			) : null}
			<section className=" flex flex-col justify-center space-y-1">
				<section className="w-full flex items-center space-x-1">
					<img
						src={imgSlug}
						className="h-5 w-5"
					/>
					<h2 className="text-sm font-semibold text-gray-200">{header}</h2>
				</section>
				<p className="text-xs text-gray-400">
					{couponCode} {description ? " | " + description : null}
				</p>
			</section>
		</section>
	);
};

export default RestaurantCoupounCard;
