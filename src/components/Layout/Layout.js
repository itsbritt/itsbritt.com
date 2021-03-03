// React
import React from 'react';

// Components
import Header from '../Header/Header';

export default function Layout({ children }) {
	return (
		<>
			<main className="main">
				<Header />
				{children}
				<footer className="global-footer">
					&copy; Britt Shroyer <span>{new Date().getFullYear()}</span>
				</footer>
			</main>
		</>
	);
}
