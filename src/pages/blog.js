// Gatsby
import { Link } from 'gatsby';

// React
import React from 'react';

// Components
import Layout from '../components/Layout/Layout';

const PostSummary = ({ postDetails }) => {
	const { title, date } = postDetails.node.childMarkdownRemark.frontmatter;
	const { slug } = postDetails.node.childMarkdownRemark.fields;

	return (
		<div className="post-summary" style={{ marginBottom: '3rem' }}>
			<Link to={slug}>{title}</Link>
			<span className="post-date">{date}</span>
		</div>
	);
};

const Blog = ({ data }) => {
	return (
		<Layout>
			<div className="page-body-container">
				<p className="page-header">Blog</p>
				{data.allFile.edges.map((edge, i) => (
					<PostSummary postDetails={edge} key={i} />
				))}
			</div>
		</Layout>
	);
};

export default Blog;

export const query = graphql`
	query Posts {
		allFile(
			filter: { sourceInstanceName: { eq: "content" }, dir: { regex: "/content/blog/" } }
			sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
		) {
			edges {
				node {
					childMarkdownRemark {
						fields {
							slug
						}
						frontmatter {
							title
							date(formatString: "MM.DD.YY")
						}
					}
				}
			}
		}
	}
`;
