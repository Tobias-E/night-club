// React & Hooks
import React, { useState, useEffect, createContext } from 'react';

// Fetching Url
const url = `http://localhost:4000/assets`;

// Export for context usage
const AssetsContext = createContext();

// Exported Component
const AssetsProvider = (props) => {
	const [assets, setAssets] = useState();

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(url);
				const result = await response.json();
				setAssets(result);
			} catch (e) {
				console.log(e);
			}
		})();
	}, []);

	return (
		<AssetsContext.Provider value={assets}>
			{props.children}
		</AssetsContext.Provider>
	);
};

export { AssetsContext, AssetsProvider };
