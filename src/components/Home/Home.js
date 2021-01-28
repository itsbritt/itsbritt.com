// React
import React from 'react';

// Components
import Layout from '../Layout/Layout';

// Svg
import computerSvg from '../../images/hero.svg';

const Home = ({ data }) => {
	return (
		<div className="home-layout">
			<Layout>
				<div className="intro">
					<img src={computerSvg} alt="computer" className="hero-svg" />
					<h3>{data.title}</h3>
					<h5>{data.intro}</h5>
				</div>
				<div className="invisible-footer" style={{ height: '100px' }}></div>
			</Layout>
		</div>
	);
};

export default Home;
