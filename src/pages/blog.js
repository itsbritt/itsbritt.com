import { Link } from 'gatsby';
// React
import React from 'react';

// Components
import Layout from '../components/Layout/Layout';

const PostSummary = ({ postDetails }) => {
	const { title, date } = postDetails.node.childMarkdownRemark.frontmatter;
	const { slug } = postDetails.node.childMarkdownRemark.fields;

	console.log();

	return (
		<div className="post-summary">
			<Link to={slug}>{title}</Link>
			<p>{date}</p>
			{/* <div className="post-tags">

			</div> */}
		</div>
	);
};

const Blog = ({ data }) => {
	return (
		<Layout>
			<div className="page-body-container">
				<p className="page-header">Blog</p>
				<p>
					{data.allFile.edges.map((edge, i) => (
						<PostSummary postDetails={edge} key={i} />
					))}
				</p>
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
							date(formatString: "MMM.DD.YYYY")
						}
					}
				}
			}
		}
	}
`;
