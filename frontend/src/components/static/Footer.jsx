// React & Hooks
import React from 'react';

// Components
import SomeIcon from './SomeIcon';

// Styles
import '../../sass/footer.scss';

// Images
import logo from '../../assets/Logo_main.png';
import facebook from '../../assets/some/facebook.png';
import twitter from '../../assets/some/twitter.png';
import google from '../../assets/some/google.png';
import skype from '../../assets/some/skype.png';
import blogger from '../../assets/some/blogger.png';

// Exported Component
const Footer = () => {
	return (
		<footer className='footer'>
			<img src={logo} alt='logo' className='footer__logo' />
			<h3 className='footer__heading'>Location</h3>
			<address className='footer__address'>
				PO Box 16122 Collins Street West Victoria 8007 Australia
			</address>
			<h3 className='footer__heading'>Opening hours</h3>
			<p className='footer__text'>MON - FRI 9 AM TO 10 PM</p>
			<p className='footer__text '>Stay Connected With Us Night Club</p>
			<div className='footer__icons'>
				<SomeIcon
					icon={facebook}
					link={'https://da-dk.facebook.com/'}
					type={'footer__iconColor '}
				/>
				<SomeIcon
					icon={twitter}
					link={'https://twitter.com/?lang=da'}
					type={'footer__iconColor footer__iconColor--transparent'}
				/>
				<SomeIcon
					icon={google}
					link={'https://www.google.dk/'}
					type={'footer__iconColor'}
				/>
				<SomeIcon
					icon={skype}
					link={'https://www.skype.com/da/'}
					type={'footer__iconColor footer__iconColor--transparent'}
				/>
				<SomeIcon
					icon={blogger}
					link={'https://www.blogger.com/about/'}
					type={'footer__iconColor'}
				/>
			</div>

			<p className='footer__text'>
				CopyRight @ 2018 NightClub psd template all right
			</p>
		</footer>
	);
};

export default Footer;
