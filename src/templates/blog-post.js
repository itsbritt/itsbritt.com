// React
import React from 'react';
// Syntax Highlighting
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

// Gatsby
import { graphql } from 'gatsby';

// Components
import Layout from '../components/Layout/Layout';

// Utils
import iconsMap from '../utils/iconsMap';

export default function BlogPost({ data }) {
	// Init syntax highlighting for code blocks
	deckDeckGoHighlightElement();
	const { title, growthState, datePlanted, dateTended, tags } = data.file.childMarkdownRemark.frontmatter;
	const { html } = data.file.childMarkdownRemark;
	return (
		<Layout>
			<div className="page-body-container">
				<p className="page-header" style={{ marginBottom: '2rem' }}>
					{title}
				</p>
				<div className="post-tags">
					{tags.map((tag, i) => (
						<span key={i}>{tag}</span>
					))}
				</div>
				<div className="post-sub-text">
					<span>
						{growthState}&nbsp;{iconsMap[growthState]}
					</span>
					<span className="post-date">Planted: {datePlanted}</span>
					<span className="post-date">Last Tended: {dateTended}</span>
				</div>
				<br />
				<hr className="post-header-divider" />

				<div dangerouslySetInnerHTML={{ __html: html }} className="post-body" />
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
					datePlanted(formatString: "MMM D, YYYY")
					dateTended(formatString: "MMM D, YYYY")
					tags
				}
			}
		}
	}
`;
