// React
import React from 'react';

// Components
import NavLink from '../NavLink/NavLink';

// Styles
import './Navbar.scss';

const Navbar = () => {
	return (
		<nav className="nav-desktop">
			<NavLink path="projects" />
			<NavLink path="resume" />
			<NavLink path="blog" />
		</nav>
	);
};

export default Navbar;
