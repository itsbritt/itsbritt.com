// React
import React from 'react';

// Gatsby
import { Link } from 'gatsby';

const NavLink = ({ path, icon, name }) => {
	return (
		<Link
			getProps={({ isCurrent }) => {
				return (
					isCurrent && {
						style: {
							// textShadow: ' 0 0 4px #fff',
							textDecoration: 'underline'
						}
					}
				);
			}}
			to={path}
		>
			{icon ? <i className={`zmdi zmdi-${icon} zdmi-hc-2x"></i>`} /> : name}
		</Link>
	);
};

export default NavLink;
