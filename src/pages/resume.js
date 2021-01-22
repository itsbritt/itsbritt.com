// React
import React from 'react';

// Components
import Layout from '../components/Layout/Layout';

import '../styles/resume.scss';
import { Link } from 'gatsby';
import { useState } from 'react';

const skills = ['javascript', 'react', 'react-redux', 'cssfefesfsefes', 'another-long-one'];

const Skill = ({ skill }) => {
	return <div className="skill">{skill}</div>;
};

const Card = ({}) => {
	// window
	// const [expanded, setExpanded] = useState(true);
	return (
		<div className="job-card">
			<div className="job-card__header">
				<div className="flex-column">
					<div className="company-name">Deloitte</div>
					<small>
						<a href="https://deloitte.com" target="_blank">
							https://deloitte.com
						</a>
					</small>
				</div>
				<small className="dates">June 2019 - April 2020</small>
			</div>
			<div className="job-card__body">
				<span className="title">Title</span>
				<p>
					lorem ipsumIpsum commodo adipisicing id et dolor tempor mollit enim do consequat Lorem dolor cillum.
					Est Lorem sunt pariatur consectetur culpa ad. Incididunt qui laborum magna Lorem ea.
				</p>
				<p>
					lorem ipsumIpsum commodo adipisicing id et dolor tempor mollit enim do consequat Lorem dolor cillum.
					Est Lorem sunt pariatur consectetur culpa ad. Incididunt qui laborum magna Lorem ea.
				</p>
				<p>
					lorem ipsumIpsum commodo adipisicing id et dolor tempor mollit enim do consequat Lorem dolor cillum.
					Est Lorem sunt pariatur consectetur culpa ad. Incididunt qui laborum magna Lorem ea.lorem ipsumIpsum
					commodo adipisicing id et dolor tempor mollit enim do consequat Lorem dolor cillum. Est Lorem sunt
					pariatur consectetur culpa ad. Incididunt qui laborum magna Lorem ea.
				</p>
				<p>
					lorem ipsumIpsum commodo adipisicing id et dolor tempor mollit enim do consequat Lorem dolor cillum.
					Est Lorem sunt pariatur consectetur culpa ad. Incididunt qui laborum magna Lorem ea.lorem ipsumIpsum
					commodo adipisicing id et dolor tempor mollit enim do consequat Lorem dolor cillum. Est Lorem sunt
					pariatur consectetur culpa ad. Incididunt qui laborum magna Lorem ea.
				</p>
				<p className="job-card__skills">
					{skills.map((skill, i) => (
						<Skill key={i} skill={skill} />
					))}
				</p>
			</div>
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
