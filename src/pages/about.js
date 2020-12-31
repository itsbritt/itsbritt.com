import React from 'react';

// Components
import Layout from '../components/Layout/Layout';

const About = () => {
	return (
		<Layout className="flex flex-column">
			<div className="about">
				<p className="about-blurb">
					<p className="title">var me = this;</p>I am a self-taught software engineer with over five years of
					professional experience in three of the major front end frameworks. Although I didn't know it at the
					time, as a philosophy major I was primed for a career in abstract thinking and problem solving. It
					wasn't until building my first website, however, that I knew I had found what I wanted to do. Since
					then, I've been doing my best to keep up with the ever-evolving JavaScript ecosystem and learning as
					much as possible along the way.
					<br />
					<br />
					After a period of coast-to-coast exploring, I'm currently settled In Austin, TX with my wife, Kelly
					and bulldog, Hugo.
				</p>
				<div className="about-image-container">
					<img
						src="https://AZARPHOTOGRAPHY.zenfolio.com/img/s/v-10/p3707040263-2.jpg"
						width="267"
						height="400"
						alt="AZAR PHOTOGRAPHY: KELLY &amp; BRITT &emdash; "
					/>
				</div>
			</div>
		</Layout>
	);
};

export default About;
