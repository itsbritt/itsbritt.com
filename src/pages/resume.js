// GraphQL
import { graphql } from 'gatsby';

// React
import React from 'react';

// Components
import Layout from '../components/Layout/Layout';

import '../styles/resume.scss';

const Skill = ({ skill }) => {
	return <div className="skill">{skill}</div>;
};

const Card = ({ data }) => {
	data = data.allFile.edges[0].node.childMarkdownRemark.frontmatter;
	return (
		<div className="job-card">
			<div className="job-card__header">
				<div>
					<div className="company-name">{data.companyName}</div>
					<small>
						<a href={data.companyUrl} target="_blank" rel="noreferrer">
							{data.companyUrl}
						</a>
					</small>
				</div>
				<small className="dates">
					{data.startDate} - {data.endDate || 'Present'}
				</small>
			</div>
			<div className="job-card__body">
				<span className="title">{data.role}</span>
				<div dangerouslySetInnerHTML={{ __html: data.summary }}></div>
				<div className="job-card__skills">
					{data.skills.map((skill, i) => (
						<Skill key={i} skill={skill} />
					))}
				</div>
			</div>
		</div>
	);
};

const Resume = ({ data }) => {
	return (
		<Layout bgColor="#586DA3">
			<div className="resume-container">
				<Card data={data} />
			</div>
		</Layout>
	);
};

export default Resume;

export const query = graphql`
	query MyQuery {
		allFile(sort: { fields: childMarkdownRemark___frontmatter___startDate, order: DESC }) {
			edges {
				node {
					childMarkdownRemark {
						html
						frontmatter {
							companyName
							companyUrl
							startDate(formatString: "MMMM YYYY")
							endDate(formatString: "MMMM YYYY")
							role
							summary
							skills
						}
					}
				}
			}
		}
	}
`;
