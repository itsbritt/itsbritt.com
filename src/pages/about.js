import React from 'react';

// Components
import Layout from '../components/Layout/Layout';

const About = props => {
	const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter;
	return (
		<Layout className="flex flex-column" bgColor="#282c35">
			<div className="about">
				<div className="about-blurb">
					<p className="title">{data.title}</p>
					<p className="body">{data.intro}</p>
					<p className="body">{data.conclusion}</p>
				</div>
				<div className="about-image-container">
					<img src={data.image} alt="My wife and I at our wedding" />
				</div>
			</div>
		</Layout>
	);
};

export default About;

export const query = graphql`
	query {
		allFile(filter: { sourceInstanceName: { eq: "content" }, name: { eq: "about" } }) {
			edges {
				node {
					childMarkdownRemark {
						frontmatter {
							title
							intro
							conclusion
							image
						}
					}
				}
			}
		}
	}
`;
