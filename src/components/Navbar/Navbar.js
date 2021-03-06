// React
import React from 'react';

// Components
import NavLink from '../NavLink/NavLink';

const Navbar = () => {
	return (
		<nav className="nav-desktop">
			<div>
				<NavLink path="/resume" name="resume" />
				<NavLink path="/digital_garden" name="digital garden" />
			</div>
			<div className="social-media">
				<a href="https://github.com/itsbritt" target="_blank" rel="noreferrer" alt="Github icon">
					github
				</a>
				<a href="https://linkedin.com/in/brittshroyer" target="_blank" rel="noreferrer" alt="LinkedIn icon">
					linkedin
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
