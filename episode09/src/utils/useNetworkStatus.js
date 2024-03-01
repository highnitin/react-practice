import { useState, useEffect } from "react";

const useNetworkStatus = () => {
	const [networkStatus, setNeworkStatus] = useState(null);

	useEffect(() => {
		window.addEventListener("online", (event) => {
			setNeworkStatus("online");
		});

		window.addEventListener("offline", (event) => {
			setNeworkStatus("offline");
		});
	}, []);

	return networkStatus;
};

export default useNetworkStatus;
