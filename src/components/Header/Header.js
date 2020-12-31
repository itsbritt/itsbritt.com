// React
import React from 'react';

// Components
import Navbar from '../Navbar/Navbar';
import NavLink from '../NavLink/NavLink';

// Styles
import './Header.scss';

const Header = ({ isDesktopView }) => {
	return (
		<header className="global-header">
			{isDesktopView && (
				<>
					<div>
						<NavLink path="/" icon="home" name="home" />
					</div>
					<Navbar />
				</>
			)}
		</header>
	);
};

export default Header;
