// React & Tools
import React, { useState, useEffect, useContext } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

// Components
import Heading from './static/Heading';

// Styles
import '../sass/events.scss';

// Images
import { AssetsContext } from './static/Assets';

const url = `http://localhost:4000/events`;

const Events = () => {
	// Date & conversion
	const [eventDates, setEventDates] = useState([]);
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'Maj',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Okt',
		'Nov',
		'Dec',
	];

	// Fetch
	const [data, setData] = useState();
	const assets = useContext(AssetsContext);
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(url);
				const result = await response.json();
				setData(result);

				result.forEach((e) => {
					let date = new Date(e.eventDate);
					let day = date.getDate();
					let month = date.getMonth();
					let hour = date.getHours();
					let minute = date.getMinutes();
					setEventDates((eventDates) => [
						...eventDates,
						{ day, month: months[month], hour, minute },
					]);
				});
			} catch (e) {
				console.log('Error:', e);
			}
		})();
		// eslint-disable-next-line
	}, []);

	let srcArr = [];
	for (let i = 4; i < 10; i++) {
		srcArr.push(i);
	}

	return (
		<section className='events'>
			<Heading white={'events of the'} linebr={'month'} />
			<div className='events__container'>
				{/* assets === undefined ? '' : console.log(assets) */}
				{assets === undefined ? (
					<p>Loading...</p>
				) : (
					<Carousel className='events__carousel'>
						{srcArr.map((src, index) => (
							<div key={index}>
								<img
									src={assets[src].url}
									alt={data[index].eventName}
								/>
								<div className='events__infoContainer'>
									<p className='events__info'>
										{eventDates[index].day}{' '}
										{eventDates[index].month}
									</p>
									<p className='events__info'>
										{eventDates[index].hour}
										{':'}
										{eventDates[index].minute < 10
											? `0${eventDates[index].minute}`
											: eventDates[index].minute}
									</p>
									<p className='events__info'>
										{data[index].location}
									</p>
								</div>
							</div>
						))}
					</Carousel>
				)}
			</div>
		</section>
	);
};

export default Events;
