// React & Tools
import React from 'react';

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
