// React
import React from 'react';

// Components
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

// Styles
import './Layout.scss';

export default function Layout({ children }) {
	return (
		<main className="main">
			<Header />
			{children}
			<Footer />
		</main>
	);
}
