// React
import React from 'react';

// Components
import Header from '../Header/Header';

// Styles
import './Layout.scss';

export default function Layout({ children }) {
	return (
		// <main className="main" style={{ backgroundColor: bgColor }}>
		<main className="main">
			<Header />
			{children}
		</main>
	);
}
