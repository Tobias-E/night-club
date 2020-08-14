// React & Tools
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

// Styles
import '../sass/newsletter.scss';

// Post newsletter
const url = 'http://localhost:4000/newsletters';
const postUrl = 'http://localhost:4000/newsletters';
async function postData(data) {
	const response = await fetch(postUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: JSON.stringify(data),
	});
	return response.json();
}

// Exported Component
const Newsletter = () => {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) =>
		postData(data.email) && console.log('Subscribed email:', data.email);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(url);
				const result = await response.json();

				console.log('EMAILS:', result);
			} catch (e) {
				console.log('Error:', e);
			}
		})();
	}, []);
	return (
		<section className='newsletter'>
			<h3 className='newsletter__heading'>
				Want the latest night club news
			</h3>
			<p className='newsletter__text'>
				Subscribe to our newsletter and never miss a{' '}
				<i className='newsletter__i'>Event</i>
			</p>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='newsletter__form'
			>
				<input
					name='email'
					className='newsletter__input'
					placeholder='Enter Your Email'
					ref={register({
						required: 'Required',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: 'invalid email address',
						},
					})}
				/>
				{errors.email && errors.email.message}
				<input
					type='submit'
					value='SUBSCRIBE'
					className='newsletter__submit'
				/>
			</form>
		</section>
	);
};

export default Newsletter;
