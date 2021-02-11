// Gatsby
import { Link } from 'gatsby';
import {FaLeaf, FaSeedling, FaTree} from 'react-icons/fa';

// React
import React from 'react';

// Components
import Layout from '../components/Layout/Layout';

const PostSummary = ({ postDetails }) => {
	const { title, growthState, dateTended } = postDetails.node.childMarkdownRemark.frontmatter;
	const { slug } = postDetails.node.childMarkdownRemark.fields;
	const icons = {
		'seedling': <FaSeedling />,
		'budding': <FaLeaf />,
		'evergreen': <FaTree />
	};
	return (
		<div className="post-summary" style={{ marginBottom: '3rem' }}>
			<Link to={slug}>{title}</Link>
			<span><i className="fas fa-seedling"></i></span>
			<span className="post-date">{dateTended}</span>
			<div>
				{
					icons[growthState]
				}
			</div>
		</div>
	);
};

const DigitalGarden = ({ data }) => {
	return (
		<Layout>
			<div className="page-body-container">
				<p className="page-header">Digital Garden</p>
				<p style={{ marginBottom: '3rem' }}>
					Labore magna mollit voluptate id incididunt ut consequat amet enim consectetur sunt. Fugiat minim
					laboris mollit adipisicing id mollit deserunt id qui eu sunt id culpa exercitation. Occaecat officia
					ut nostrud magna et Lorem voluptate magna laborum quis ex ut. Magna excepteur qui ex mollit commodo.
				</p>
				<div className="post-filters">
					<ul className="post-filters__topic">Tags Here</ul>
					<ul className="post-filters__state">
						<li>Seedling</li>
						<li>Budding</li>
						<li>Evergreen</li>
					</ul>
				</div>
				<div className="post-list">
					{data.allFile.edges.map((edge, i) => (
						<PostSummary postDetails={edge} key={i} />
					))}
				</div>
			</div>
		</Layout>
	);
};

export default DigitalGarden;

export const query = graphql`
	query Posts {
		allFile(
			filter: { sourceInstanceName: { eq: "content" }, dir: { regex: "/content/digital_garden/" } }
			sort: { fields: childMarkdownRemark___frontmatter___dateTended, order: DESC }
		) {
			edges {
				node {
					childMarkdownRemark {
						fields {
							slug
						}
						frontmatter {
							title
							growthState
							dateTended(formatString: "MM.DD.YY")
						}
					}
				}
			}
		}
	}
`;
