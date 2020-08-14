// React & Tools
import React, { useContext } from 'react';

// Components
import Heading from './static/Heading';

// Styles
import '../sass/gallery.scss';

// Images
import { AssetsContext } from './static/Assets';

// Source array
let srcArr = [];
for (let i = 10; i < 24; i++) {
	srcArr.push(i);
}

// Exported Component
const Gallery = () => {
	const assets = useContext(AssetsContext);
	return (
		<section className='gallery'>
			<Heading white={'night club gallery'} />
			<div className='gallery__container'>
				{assets === undefined
					? ''
					: srcArr.map((item, index) => (
							<img
								src={assets[item].url}
								alt={assets[item].name}
								key={index}
								className='gallery__img'
							/>
					  ))}
			</div>
		</section>
	);
};

export default Gallery;
