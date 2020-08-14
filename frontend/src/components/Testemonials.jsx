// React & Tools
import React, { useState, useEffect, useContext } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

// Components
import SomeIcon from './static/SomeIcon';

// Styles
import '../sass/testemonials.scss';

// Images
import facebook from '../assets/some/facebook.png';
import twitter from '../assets/some/twitter.png';
import { AssetsContext } from './static/Assets';

// Fetching Url
const url = 'http://localhost:4000/testemonials';

// Source array
const srcArr = [24, 25, 26];

// Exported Component
const Testemonials = () => {
	const [data, setData] = useState();
	const assets = useContext(AssetsContext);
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(url);
				const result = await response.json();
				setData(result);
			} catch (e) {
				console.log('Error:', e);
			}
		})();
	}, []);
	return (
		<section className='testemonials'>
			{assets === undefined || data === undefined ? (
				<p>Loading...</p>
			) : (
				<Carousel>
					{srcArr.map((src, index) => (
						<div key={index} className='testemonials__container'>
							<img
								src={assets[src].url}
								alt=''
								className='testemonials__img'
							/>
							<h3 className='testemonials__name'>
								{data[index].name}
							</h3>
							<p className='testemonials__text'>
								{data[index].content}
							</p>
							<div className='testemonials__someContainer'>
								<SomeIcon
									icon={facebook}
									link={data[index].facebook}
									type={'footer__iconColor '}
								/>
								<SomeIcon
									icon={twitter}
									link={data[index].twitter}
									type={
										'footer__iconColor footer__iconColor--transparent'
									}
								/>
							</div>
						</div>
					))}
				</Carousel>
			)}
		</section>
	);
};

export default Testemonials;
