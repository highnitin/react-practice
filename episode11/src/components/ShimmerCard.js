const ShimmerCard = () => {
	return (
		<section className="card flex flex-col justify-between items-start border-2 border-gray-400 m-5 p-3 w-64 min-h-96 max-h-96 overflow-hidden rounded-md">
			<section
				className="w-full h-52 bg-gradient-to-r from-gray-700 via-gray-700 to-gray-900 bg-cover bg-opacity-50 shimmer shimmerImg"
				style={{ backgroundSize: "200% 100%" }}></section>
			<section className="w-full h-2 border-none bg-gradient-to-r from-gray-700 via-gray-700 to-gray-900 bg-opacity-50 shimmer shimmerLine"></section>
			<section className="w-full h-2 border-none bg-gradient-to-r from-gray-700 via-gray-700 to-gray-900 bg-cover shimmer shimmerLine"></section>
			<section className="w-full h-2 border-none bg-gradient-to-r from-gray-700 via-gray-700 to-gray-900 bg-cover shimmer shimmerLine"></section>
			<section className="w-full h-2 border-none bg-gradient-to-r from-gray-700 via-gray-700 to-gray-900 bg-cover shimmer shimmerLine"></section>
		</section>
	);
};

export default ShimmerCard;
