// React
import React from 'react';

// Styles
import './Footer.scss';

const Footer = () => {
	return (
		<ul className="social-media-links">
			<li>
				<a href="https://github.com/itsbritt" target="_blank" rel="noreferrer" alt="Github icon">
					<i className="zmdi zmdi-github zmdi-hc-2x"></i>
				</a>
			</li>
			<li>
				<a href="https://linkedin.com/in/brittshroyer" target="_blank" rel="noreferrer" alt="LinkedIn icon">
					<i className="zmdi zmdi-linkedin zmdi-hc-2x"></i>
				</a>
			</li>
		</ul>
	);
};

export default Footer;
