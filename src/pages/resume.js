// React
import React from 'react';

// Components
import Layout from '../components/Layout/Layout';

import '../styles/resume.scss';

const Card = ({}) => {
	return (
		<div className="job-card">
			<div className="job-card__header">
				<span className="company-name">Company Name</span>
				<div className="dates">
					<span>June 2019 - April 2020</span>
				</div>
			</div>
			<div className="job-card__body">
				<span className="company-link">
					<a>Link</a>
				</span>
				<span className="title">Title</span>
				<p>lorem</p>
				<p>ipsum</p>
				<p>lorem</p>
				<p>ipsum</p>
			</div>
			<div className="job-card__footer"></div>
		</div>
	);
};

const Resume = () => {
	return (
		<Layout bgColor="#586DA3">
			<div className="resume-container">
				<Card />
			</div>
		</Layout>
	);
};

export default Resume;
