// Gatsby
import { Link } from 'gatsby';

// React
import React, { useReducer } from 'react';

// Components
import Layout from '../components/Layout/Layout';

//Utils
import iconsMap from '../utils/iconsMap';
import {
	initializeFilterState,
	isOnlySelectedTag,
	filterTags,
	filterPosts,
	currentlySelectedTags
} from '../utils/filterHelpers';
import { GROWTH_STATES } from '../utils/growthStates';

const PostSummary = ({ postDetails, tabIndex }) => {
	const { title, growthState, dateTended } = postDetails.node.childMarkdownRemark.frontmatter;
	const { slug } = postDetails.node.childMarkdownRemark.fields;
	return (
		<div className="post-summary">
			<Link tabIndex={tabIndex} to={slug}>
				{title}
			</Link>
			<div
				className="post-summary-data"
				style={{
					display: 'flex',
					alignItems: 'center',
					marginTop: '0.5rem'
				}}
			>
				<small>
					{dateTended}&nbsp;&nbsp;{'|'}&nbsp;&nbsp;{growthState}&nbsp;&nbsp;
					{iconsMap[growthState]}
				</small>
				<br />
			</div>
		</div>
	);
};

const DigitalGarden = ({ data }) => {
	// Filtered Tags
	const tags = filterTags(data.allFile.edges);

	// Initial Filter State
	const initialFilterState = {
		growthStates: initializeFilterState(GROWTH_STATES, null),
		tags: initializeFilterState(tags, null)
	};

	// Filter Reducer
	const gardenStateReducer = (state, action) => {
		switch (action.type) {
			case 'growthStates':
				const isGrowthStateSelected = state.growthStates[action.payload];
				return {
					...state,
					growthStates: {
						// If growthState being de-selected is currently selected we need to remove all filters by setting everything to null
						// If a new growthstate is selected, we need to set all others to false in order to apply filtering
						...initializeFilterState(GROWTH_STATES, isGrowthStateSelected ? null : false),
						[action.payload]: isGrowthStateSelected ? null : !isGrowthStateSelected
					}
				};
			case 'tags':
				const isTagSelected = state.tags[action.payload];
				const isExactlyOneSelectedTag = isOnlySelectedTag(state, action);
				const selectedTags = currentlySelectedTags(state);
				// If we are de-selecting the only remaining selected tag, we want to set everything back to null in order to remove all filters
				// Otherwise, we want to set all non-selected tags to false (since they are initialized as null). This initializes the filtering once the first tag is selected
				const overwriteTags = () =>
					initializeFilterState(tags, isTagSelected && isExactlyOneSelectedTag ? null : false);

				return {
					...state,
					tags: {
						...overwriteTags(),
						// Since every tag that has not been selected was set to false, we need to overwrite the tags that have already been selected
						...selectedTags,
						[action.payload]: isTagSelected && isExactlyOneSelectedTag ? null : !isTagSelected
					}
				};
			default:
				throw new Error();
		}
	};

	// Filter State
	const [state, dispatch] = useReducer(gardenStateReducer, initialFilterState);

	// Filtered Posts
	const allPosts = data.allFile.edges;
	const filteredPosts = filterPosts(state, allPosts);

	return (
		<Layout>
			<div className="page-body-container">
				{/* Page Header */}
				<p className="page-header">Digital Garden</p>
				{/* Page Summary */}
				<p className="garden-intro central-content">
					An open collection of notes, resources, sketches, and explorations I'm currently cultivating. Some
					notes are Seedlings, some are budding, and some are fully grown Evergreen.
				</p>
				{/* Filters */}
				<div className="post-filters">
					<ul className="post-filters__topic">
						{/* Tags */}
						{tags.map((tag, i) => (
							<span
								key={i}
								role="button"
								onClick={() => dispatch({ type: 'tags', payload: tag })}
								onKeyPress={() => dispatch({ type: 'tags', payload: tag })}
								className={state.tags[tag] ? 'selected' : 'unselected'}
								tabIndex={0}
							>
								{tag}
							</span>
						))}
					</ul>
					{/* Growth States */}
					<ul className="post-filters__state">
						{GROWTH_STATES.map((growthState, i) => (
							<span
								key={i}
								role="button"
								tabIndex={0}
								onClick={() => dispatch({ type: 'growthStates', payload: growthState })}
								onKeyPress={() => dispatch({ type: 'growthStates', payload: growthState })}
								className={state.growthStates[growthState] ? 'selected' : 'unselected'}
							>
								{growthState}
							</span>
						))}
					</ul>
				</div>
				{/* Filtered List of Posts */}
				<div className="post-list">
					{filteredPosts.map((post, i) => {
						return <PostSummary postDetails={post} key={i} />;
					})}
				</div>
			</div>
		</Layout>
	);
};

export default DigitalGarden;

export const query = graphql`
	query allPosts {
		allFile(
			filter: { sourceInstanceName: { eq: "content" }, relativeDirectory: { eq: "digital_garden" } }
			sort: { fields: childMarkdownRemark___frontmatter___dateTended, order: DESC }
		) {
			edges {
				node {
					childMarkdownRemark {
						fields {
							slug
						}
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
		}
	}
`;
