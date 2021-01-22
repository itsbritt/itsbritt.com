// React
import React from 'react';

// Components
import Navbar from '../Navbar/Navbar';
import NavLink from '../NavLink/NavLink';

import siteLogo from '../../images/logo.png';

// Styles
import './Header.scss';
import { Link } from 'gatsby';

const Header = ({ isDesktopView }) => {
	return (
		<header className="global-header">
			{isDesktopView && (
				<>
					<Link to="/">
						<img
							src={siteLogo}
							alt="logo"
							style={{ height: '100%', filter: 'invert(100%)', width: '55px' }}
						/>
					</Link>
					<Navbar />
				</>
			)}
		</header>
	);
};

export default Header;
