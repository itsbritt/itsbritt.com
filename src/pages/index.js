// React
import * as React from 'react';

// Gatsby
import { Router } from '@reach/router';
import { graphql } from 'gatsby';

// Components
import Home from '../components/Home/Home';

// Pages
import Resume from './resume';
import Blog from './blog';
import NotFoundPage from './404';

// Styles
import '../styles/styles.scss';

const IndexPage = props => {
	const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter;
	console.log('data', data);
	return (
		<Router>
			<Home path="/" data={data} />
			<Resume path="/resume" />
			<Blog path="/blog" />
			<NotFoundPage default />
		</Router>
	);
};

export default IndexPage;

export const query = graphql`
	query {
		allFile(filter: { sourceInstanceName: { eq: "content" }, name: { eq: "home" } }) {
			edges {
				node {
					childMarkdownRemark {
						frontmatter {
							title
							intro
						}
					}
				}
			}
		}
	}
`;
