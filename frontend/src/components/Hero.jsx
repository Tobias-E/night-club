// React
import React from 'react';
import { useMediaQuery } from 'react-responsive';

// Styles
import '../sass/hero.scss';

// Images
import logo from '../assets/Logo.svg';
import underline from '../assets/bottom_line.png';
import underline2 from '../assets/bottom_line2.png';

// Component

const Hero = () => {
	const isDesktop = useMediaQuery({
		query: '(min-device-width: 1023px)',
	});

	return (
		<div className='hero'>
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
