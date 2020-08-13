// React & Tools
import React, { useContext } from 'react';

// Components
import Heading from './static/Heading';

// Styles
import '../sass/gallery.scss';

// Images
import { AssetsContext } from './static/Assets';

let srcArr = [];
for (let i = 10; i < 24; i++) {
	srcArr.push(i);
}
const Gallery = () => {
	const assets = useContext(AssetsContext);
	return (
		<section className='gallery'>
			<Heading white={'night club gallery'} />
			{assets === undefined ? '' : console.log(assets[10].url)}
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
