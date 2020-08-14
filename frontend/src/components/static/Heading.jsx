// React & Hooks
import React from 'react';
import { useMediaQuery } from 'react-responsive';

// Styles
import '../../sass/heading.scss';

// Exported Component
const Heading = ({ white, linebr, pink }) => {
	const isDesktop = useMediaQuery({
		query: '(min-device-width: 1023px)',
	});
	return (
		<div className='container'>
			<h2 className='container__heading'>
				{white}
				{isDesktop ? '' : <br />} {linebr}
				<i className='container__heading container__heading--pink'>
					{pink}
				</i>
			</h2>
		</div>
	);
};

export default Heading;
