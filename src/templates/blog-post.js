// React
import React from 'react';

// Gatsby
import { graphql } from 'gatsby';

// Components
import Layout from '../components/Layout/Layout';

export default function BlogPost({ data }) {
	const { html, timeToRead } = data.file.childMarkdownRemark;
	const { title, date } = data.file.childMarkdownRemark.frontmatter;
	return (
		<Layout>
			<div className="page-body-container">
				<p className="page-header">
					<span>{title}</span>
					<span className="post-date">
						{date} - {timeToRead} min read
					</span>
				</p>

				<div dangerouslySetInnerHTML={{ __html: html }} className="post-body"></div>
			</div>
		</Layout>
	);
}

export const pageQuery = graphql`
	query BlogPostById($id: String!) {
		file(id: { eq: $id }) {
			childMarkdownRemark {
				html
				frontmatter {
					title
					date(formatString: "MM.DD.YY")
				}
				timeToRead
			}
		}
	}
`;
