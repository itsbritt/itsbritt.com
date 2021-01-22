// React
import React, { useEffect, useState } from 'react';

// Lodash
import { throttle } from 'lodash';

// Components
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

// Styles
import './Layout.scss';

export default function Layout({ children, bgColor }) {
	const minBreakPoint = 765;
	const isDesktopWidth = () => window.innerWidth > minBreakPoint;
	const [isDesktopView, setIsDesktopView] = useState(isDesktopWidth);

	useEffect(() => {
		let mounted = true;
		function handleResize() {
			return setIsDesktopView(isDesktopWidth);
		}
		if (mounted) {
			window.addEventListener('resize', throttle(handleResize, 250));
		}
		return function cleanup() {
			mounted = false;
		};
	}, []);

	return (
		<main className="main" style={{ backgroundColor: bgColor }}>
			<Header isDesktopView={isDesktopView} />
			{children}
			<Footer isDesktopView={isDesktopView} />
		</main>
	);
}
