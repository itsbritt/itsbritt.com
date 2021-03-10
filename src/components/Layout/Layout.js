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
					<div className="copyright">
						&copy; Britt Shroyer <span>{new Date().getFullYear()}</span>
					</div>
					<div className="social-media">
						<a href="https://github.com/itsbritt" target="_blank">
							<i className="zmdi zmdi-github zdmi-hc-6x" />
						</a>
						<a href="https://linkedin.com/in/brittshroyer" target="_blank">
							<i className="zmdi zmdi-linkedin zdmi-hc-6x" />
						</a>
					</div>
				</footer>
			</main>
		</>
	);
}
