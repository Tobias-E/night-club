// React & Tools
import React from 'react';

// Components
import Welcome from '../Welcome';
import Events from '../Events';
import Gallery from '../Gallery';
import Testemonials from '../Testemonials';
import Newsletter from '../Newsletter';

// Exported Component
const Home = () => {
	return (
		<main>
			<Welcome />
			<Events />
			<Gallery />
			<Testemonials />
			<Newsletter />
		</main>
	);
};

export default Home;
