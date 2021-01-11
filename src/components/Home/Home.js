// React
import React from 'react';

// Particles
import Particles from 'react-particles-js';

// Components
import Layout from '../Layout/Layout';
import SocialMediaLinks from '../SocialMediaList/SocialMediaList';

// Styles
import './Home.scss';

const Home = ({ data }) => {
	return (
		<>
			<Particles
				params={{
					particles: {
						number: {
							value: 50
						},
						size: {
							value: 3
						}
					},
					interactivity: {
						events: {
							onhover: {
								enable: true,
								mode: 'repulse'
							}
						}
					}
				}}
			/>
			<Layout>
				<div className="intro">
					<h1>{data.title}</h1>
					<h3>{data.intro}</h3>
					<SocialMediaLinks />
				</div>
			</Layout>
		</>
	);
};

export default Home;
