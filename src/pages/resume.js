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

const Card = ({ data, mostRecent }) => {
	const {
		companyName,
		companyUrl,
		startDate,
		endDate,
		role,
		summary,
		skills
	} = data.node.childMarkdownRemark.frontmatter;

	return (
		<div className="job-card">
			<div className="job-card__header">
				<div className="company-name">{companyName}</div>
				<small className="dates">
					{startDate} - {mostRecent ? 'Present' : endDate}
				</small>
			</div>
			<div className="job-card__body">
				<span className="title">{role}</span>
				<div dangerouslySetInnerHTML={{ __html: summary }} className="body-summary"></div>
				<div className="job-card__skills">
					{skills.map((skill, i) => (
						<Skill key={i} skill={skill} />
					))}
				</div>
				<small>
					<a href={companyUrl} target="_blank" rel="noreferrer">
						{companyUrl}
					</a>
				</small>
			</div>
		</div>
	);
};

const Resume = ({ data }) => {
	return (
		<Layout>
			<div className="page-body-container">
				<p className="page-header">Resume</p>
				{data.allFile.edges.map((edge, i) => (
					<Card data={edge} key={i} mostRecent={i === 0} />
				))}
			</div>
		</Layout>
	);
};

export default Resume;

export const query = graphql`
	query Jobs {
		allFile(
			filter: { sourceInstanceName: { eq: "content" }, dir: { regex: "/content/jobs/" } }
			sort: { fields: childMarkdownRemark___frontmatter___startDate, order: DESC }
		) {
			edges {
				node {
					childMarkdownRemark {
						html
						frontmatter {
							companyName
							companyUrl
							endDate(formatString: "MMM YYYY")
							intro
							role
							skills
							startDate(formatString: "MMM YYYY")
							summary
							title
						}
					}
				}
			}
		}
	}
`;
