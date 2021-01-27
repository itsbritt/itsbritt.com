// exports.createPages = ({ graphql, actions }) => {
// 	const { createPage } = actions;
// 	return new Promise((resolve, reject) => {
// 		// to create the page we need access to the blog post template
// 		const postTemplate = path.resolve('src/templates/blog-post.js');
// 		resolve(
// 			graphql(
// 				`
// 					{
// 						allMarkdownRemark {
// 							edges {
// 								node {
// 									frontmatter {
// 										path
// 									}
// 								}
// 							}
// 						}
// 					}
// 				`
// 			).then(result => {
// 				console.log('RESULT>>>>', result);
// 				if (result.errors) {
// 					console.log(result.errors);
// 					reject(result.errors);
// 				}
// 				result.data.allMarkdownRemark.edges.forEach(({ node }) => {
// 					// you can see node value in the screenshot
// 					const path = node.frontmatter.path;

// 					createPage({
// 						path,
// 						component: postTemplate,
// 						context: {
// 							/*
// 				the value passed in the context will be available for you to use in your page queries as a GraphQL variable, as per the template snippet */
// 							pathSlug: path
// 						}
// 					});
// 					resolve();
// 				});
// 			})
// 		);
// 	});
// };

module.exports = {
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/static/assets`,
				name: 'images'
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/content`
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				// CommonMark mode (default: true)
				commonmark: true,
				// Footnotes mode (default: true)
				footnotes: true,
				// Pedantic mode (default: true)
				pedantic: true,
				// GitHub Flavored Markdown mode (default: true)
				gfm: true,
				// Plugins configs
				plugins: []
			}
		},
		`gatsby-plugin-slug`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-netlify-cms`
	]
};
