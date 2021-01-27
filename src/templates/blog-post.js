import React from 'react';

import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';

export default function BlogPost({ data }) {
	const { html } = data.file.childMarkdownRemark;
	// const post = data.markdownRemark;
	return (
		<Layout>
			<div className="page-body-container">
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
					date
				}
			}
		}
	}
`;
