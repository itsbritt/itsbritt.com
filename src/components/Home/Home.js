// React
import React from 'react';

// Components
import Layout from '../Layout/Layout';
import SocialMediaLinks from '../SocialMediaList/SocialMediaList';

// Styles
import './Home.scss';

const Home = () => {
	return (
		<Layout>
			<div className="intro">
				<h1>Britt Shroyer</h1>
				<h3>UI Engineer</h3>
				<SocialMediaLinks />
			</div>
		</Layout>
	);
};

export default Home;