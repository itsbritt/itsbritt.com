// React
import React from 'react';

// Components
import NavLink from '../NavLink/NavLink';

// Styles
import './Navbar.scss';

const Navbar = () => {
	return (
		<nav className="nav-desktop">
			<NavLink path="/resume" name="resume" />
			<NavLink path="/blog" name="blog" />
		</nav>
	);
};

export default Navbar;
