const path = require('path');
// Gatsby allows us to query our data and use that data to generate pages at build time
// By programatically generating pages, we can build pages for each blog post using the
// post slug returned from the query
exports.createPages = async ({ graphql, actions }) => {
	// **Note:** The graphql function call returns a Promise
	const { createPage } = actions;

	const result = await graphql(`
		query Posts {
			allFile(
				filter: { sourceInstanceName: { eq: "content" }, dir: { regex: "/content/blog/" } }
				sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
			) {
				edges {
					node {
						id
						childMarkdownRemark {
							fields {
								slug
							}
						}
					}
				}
			}
		}
	`);

	result.data.allFile.edges.forEach(({ node }) => {
		createPage({
			path: node.childMarkdownRemark.fields.slug,
			component: path.resolve(`./src/templates/blog-post.js`),
			context: {
				// Data passed to context is available
				// in page queries as GraphQL variables.
				id: node.id
			}
		});
	});
};
