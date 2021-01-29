// React
import React from 'react';

// Gatsby
import { graphql } from 'gatsby';

// Components
import Layout from '../components/Layout/Layout';

export default function BlogPost({ data }) {
	const { html } = data.file.childMarkdownRemark;
	const { title, growthState, datePlanted, dateTended } = data.file.childMarkdownRemark.frontmatter;
	return (
		<Layout>
			<div className="page-body-container">
				<p className="page-header" style={{ marginBottom: '1rem' }}>
					{title}
				</p>
				<div className="post-sub-text">
					<span>{growthState}</span>
					<span className="post-date">Planted: {datePlanted}</span>
					<span className="post-date">Last Tended: {dateTended}</span>
				</div>

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
					growthState
					datePlanted(formatString: "MM.DD.YY")
					dateTended(formatString: "MM.DD.YY")
				}
			}
		}
	}
`;
