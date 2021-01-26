// React
import React from 'react';

// Components
import NavLink from '../NavLink/NavLink';

// Styles
import './MobileFooter.scss';

const MobileFooter = () => {
	const clientLinks = [
		{ name: 'home', path: '/', icon: 'home' },
		{ name: 'about', path: '/about', icon: 'face' },
		{ name: 'resume', path: '/resume', icon: 'folder' },
		{ name: 'blog', path: '/posts', icon: 'laptop' }
	];
	const footerIcons = clientLinks.map(({ name, path, icon }, i) => (
		<NavLink name={name} path={path} icon={icon} key={i} />
	));
	return <nav className="mobile-nav">{footerIcons}</nav>;
};

export default MobileFooter;
