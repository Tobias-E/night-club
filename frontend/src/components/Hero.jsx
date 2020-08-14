// React & Hooks
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

// Styles
import '../sass/hero.scss';

// Images
import logo from '../assets/logo.svg';
import underline from '../assets/bottom_line.png';
import underline2 from '../assets/bottom_line2.png';
import backgroundImg1 from '../assets/header_bg_1.jpg';
import backgroundImg2 from '../assets/header_bg_2.jpg';

// Exported Component
const Hero = () => {
	const isDesktop = useMediaQuery({
		query: '(min-device-width: 1023px)',
	});

	// Changing picture
	const [backgroundImg, setBackgroundImg] = useState('');
	const backgroundArr = [backgroundImg1, backgroundImg2];
	useEffect(() => {
		setBackgroundImg(
			backgroundArr[
				Math.floor(Math.random() * Math.floor(backgroundArr.length))
			]
		);
	}, [backgroundArr]);

	return (
		<div
			className='hero'
			style={{ backgroundImage: `url(${backgroundImg})` }}
		>
			<img className='hero__logo' src={logo} alt='logo' />
			<h2 className='hero__text'>Have a good time</h2>
			<img
				className='hero__underline'
				src={isDesktop ? underline : underline2}
				alt='spacer'
			/>
		</div>
	);
};

export default Hero;
