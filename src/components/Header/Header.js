// React
import React, { useState, useEffect } from 'react';

// Lodash
import { throttle } from 'lodash';

// Components
import Navbar from '../Navbar/Navbar';
import NavLink from '../NavLink/NavLink';

// Styles
import './Header.scss';

const Header = () => {
	const minBreakPoint = 765;
	const isDesktopWidth = () => window.innerWidth > minBreakPoint;
	const [isDesktopView, setIsDesktopView] = useState(isDesktopWidth);

	useEffect(() => {
		function handleResize() {
			return setIsDesktopView(isDesktopWidth);
		}
		window.addEventListener('resize', throttle(handleResize, 250));
	});

	// <button>
	// 					<i className="zmdi zmdi-menu zmdi-hc-2x"></i>
	// 				</button>

	return (
		<header className="global-header">
			<div>
				<NavLink>
					<i className="zmdi zmdi-home zmdi-hc-2x"></i>
				</NavLink>
			</div>
			<div>
				{isDesktopView ? (
					<Navbar />
				) : (
					<nav>
						<div hidden data-menu-button>
							Menu
						</div>
						<ul id="menu" data-menu>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/about">About</a>
							</li>
							<li>
								<a href="/shop">Shop</a>
							</li>
							<li>
								<a href="/contact">Contact</a>
							</li>
						</ul>
					</nav>
				)}
			</div>
		</header>
	);
};

export default Header;
