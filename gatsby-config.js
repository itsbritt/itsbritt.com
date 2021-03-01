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
				plugins: [
					{
						resolve: `gatsby-remark-highlight-code`,
						options: {
							theme: 'nord',
							terminal: 'carbon'
						}
					}
				]
			}
		},
		// {
		// 	resolve: `gatsby-plugin-mdx`,
		// 	options: {
		// 		extensions: ['.mdx', '.md']
		// 	}
		// },
		`gatsby-plugin-slug`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-netlify-cms`

	]
};
