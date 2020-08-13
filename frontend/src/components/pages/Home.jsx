// React & Tools
import React from 'react';

// Components
import Welcome from '../Welcome';
import Events from '../Events';
import Gallery from '../Gallery';
import Testemonials from '../Testemonials';

// Export
const Home = () => {
	return (
		<main>
			<Welcome />
			<Events />
			<Gallery />
			<Testemonials />
		</main>
	);
};

export default Home;
