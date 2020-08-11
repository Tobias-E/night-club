// React & Tools
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// Styles
import '../../sass/header.scss';

// Images
import logo from '../../assets/Logo_main.png';

// Component
const Header = () => {
	const [active, setActive] = useState(false);
	const isDesktop = useMediaQuery({
		query: '(min-device-width: 1023px)',
	});

	useEffect(() => {
		setActive(true);
	}, [isDesktop]);

	return (
		<header className='header'>
			<div className='header__triangleLeft'></div>
			<div className='header__triangleRight'></div>
			<img className='header__logo' src={logo} alt='logo' />
			<div className='button' onClick={() => setActive(!active)}>
				<div className='button__line'></div>
				<div className='button__line'></div>
				<div className='button__line'></div>
			</div>

			{active ? (
				<nav className='nav'>
					<Link className='nav__item' to='/'>
						Home
					</Link>
					<Link className='nav__item' to='/about'>
						About us
					</Link>
					<Link className='nav__item' to='/blog'>
						Blog
					</Link>
					<Link className='nav__item' to='/events'>
						Events
					</Link>
				</nav>
			) : (
				<div className='empty'></div>
			)}
		</header>
	);
};

export default Header;
