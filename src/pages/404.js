import * as React from 'react';
import { Link } from 'gatsby';

// styles
const pageStyles = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	textAlign: 'center',
	fontFamily: 'Montserrat, Roboto, sans-serif, serif',
	color: '#fff',
	backgroundColor: '#2477ad',
	opacity: '0.91',
	height: '100%',
	position: 'absolute',
	top: '0',
	left: '0',
	width: '100%'
};
const headingStyles = {
	maxWidth: 320
};
const linkStyles = {
	color: 'inherit'
};

// markup
const NotFoundPage = () => {
	return (
		<main style={pageStyles}>
			<title>Not found</title>
			<h1 style={headingStyles}>Page not found</h1>
			<p>
				Sorry{' '}
				<span role="img" aria-label="Pensive emoji">
					😔
				</span>
				<br />
				<br />
				<br />
				<Link to="/" style={linkStyles}>
					Home
				</Link>
			</p>
		</main>
	);
};

export default NotFoundPage;
