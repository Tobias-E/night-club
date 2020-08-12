// React & Tools
import React, { useState, useEffect, useContext } from 'react';
//import { useMediaQuery } from 'react-responsive';

// Components
import Heading from './static/Heading';

// Styles
import '../sass/events.scss';

// Images
import { AssetsContext } from './static/Assets';

const url = `http://localhost:4000/events`;

const Events = () => {
	const [data, setData] = useState('');
	const assets = useContext(AssetsContext);
	// Fetch
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(url);
				const result = await response.json();
				console.log(result);
				setData(result);
			} catch (e) {
				console.log('Error:', e);
			}
		})();
	}, []);
	return (
		<section className='events'>
			<Heading white={'events of the'} linebr={'month'} />
			<div className='event__container'>
				{assets === undefined ? '' : console.log(assets)}
				{assets === undefined ? (
					<p>Loading...</p>
				) : (
					<img
						className='events__img'
						src={assets[0].url}
						alt={data[0].eventName}
					/>
				)}
			</div>
		</section>
	);
};

export default Events;
