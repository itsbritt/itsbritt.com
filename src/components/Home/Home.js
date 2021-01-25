// React
import React from 'react';

// Components
import Layout from '../Layout/Layout';
// import SocialMediaLinks from '../SocialMediaList/SocialMediaList';

// Styles
import './Home.scss';
import computerSvg from '../../images/hero.svg';

const Home = ({ data }) => {
	return (
		<div className="home-layout">
			<Layout>
				<div className="intro">
					<img src={computerSvg} alt="computer" className="hero-svg" />
					<h1>{data.title}</h1>
					<h3>{data.intro}</h3>
				</div>
				<div className="invisible-footer" style={{ height: '100px' }}></div>
			</Layout>
		</div>
	);
};

export default Home;
