// React & Hooks
import React from 'react';

// Exported Component
const SomeIcon = ({ icon, link, type }) => {
	return (
		<div className='footer__iconBorder'>
			<a
				className={type}
				href={link}
				target='_blank'
				rel='noopener noreferrer'
			>
				<img src={icon} alt='facebook' className='footer__link' />
			</a>
		</div>
	);
};

export default SomeIcon;
