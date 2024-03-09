import { useState, useEffect } from "react";

const useNetworkStatus = () => {
	const [networkStatus, setNeworkStatus] = useState(true);

	useEffect(() => {
		window.addEventListener("online", (event) => {
			setNeworkStatus(true);
		});

		window.addEventListener("offline", (event) => {
			setNeworkStatus(false);
		});
	}, []);

	return networkStatus;
};

export default useNetworkStatus;
