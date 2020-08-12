// React & Tools
import React from 'react';
//import { useMediaQuery } from 'react-responsive';

// Components
import Welcome from '../Welcome';
import Events from '../Events';
//import Heading from '../static/Heading';

// Styles
//import '../../sass/home.scss';

// Images
//import thumb1 from '../../assets/thumb1.jpg';

// Export
const Home = () => {
	return (
		<main>
			<Welcome />
			<Events />
		</main>
	);
};

export default Home;
