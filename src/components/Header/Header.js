// React
import React from 'react';

// Gatsby
import { Link } from 'gatsby';

// Components
import Navbar from '../Navbar/Navbar';

const Header = () => {
	return (
		<header className="global-header">
			<Link to="/" className="home-link">
				Br;tt
			</Link>
			<Navbar />
		</header>
	);
};

export default Header;
