// React & Tools
import React from 'react';

// Components
import Heading from './static/Heading';

// Styles
import '../sass/welcome.scss';

// Images
import thumb1 from '../assets/thumb1.jpg';
import thumb2 from '../assets/thumb2.jpg';
import thumb3 from '../assets/thumb3.jpg';

const Welcome = () => {
	return (
		<section className='welcome'>
			<Heading white={'welcome in'} linebr={'night'} pink={'club'} />
			<div className='welcome__imgContainer'>
				<img src={thumb1} alt='dinner' className='welcome__img' />
				<img src={thumb2} alt='food' className='welcome__img' />
				<img src={thumb3} alt='bar' className='welcome__img' />
			</div>
		</section>
	);
};

export default Welcome;
