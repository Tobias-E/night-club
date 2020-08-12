import React, { useState, useEffect, createContext } from 'react';

const url = `http://localhost:4000/assets`;

const AssetsContext = createContext();

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
