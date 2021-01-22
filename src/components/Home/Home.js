// React
import React from 'react';

// Components
import Layout from '../Layout/Layout';
import SocialMediaLinks from '../SocialMediaList/SocialMediaList';

// Styles
import './Home.scss';

const Home = ({ data }) => {
	return (
		<div className="home-layout">
			<Layout>
				<div className="intro">
					<h1>{data.title}</h1>
					<h3>{data.intro}</h3>
					<SocialMediaLinks />
				</div>
			</Layout>
		</div>
	);
};

export default Home;
