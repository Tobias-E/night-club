// React & Tools
import React from 'react';
//import { useMediaQuery } from 'react-responsive';

// Components
import Welcome from '../Welcome';
import Events from '../Events';
import Gallery from '../Gallery';

// Export
const Home = () => {
	return (
		<main>
			<Welcome />
			<Events />
			<Gallery />
		</main>
	);
};

export default Home;
