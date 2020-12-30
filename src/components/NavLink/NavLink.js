// React
import React from 'react';

// Gatsby
import { Link } from 'gatsby';

const NavLink = ({ path, children }) => {
	return (
		<Link
			getProps={({ isCurrent }) => {
				return isCurrent
					? {
							style: {
								textShadow: ' 0 0 4px #fff',
								textDecoration: 'underline'
							}
					  }
					: { style: {} };
			}}
			to={`/${path ? path : ''}`}
		>
			{path ? path : children}
		</Link>
	);
};

export default NavLink;
