// Gatsby
import { Link } from 'gatsby';
import {FaLeaf, FaSeedling, FaTree} from 'react-icons/fa';

// React
import React, { useReducer } from 'react';

// Components
import Layout from '../components/Layout/Layout';

const PostSummary = ({ postDetails }) => {
	console.log('postDetails', postDetails);
	const { title, growthState, dateTended } = postDetails.node.childMarkdownRemark.frontmatter;
	const { slug } = postDetails.node.childMarkdownRemark.fields;
	const icons = {
		'seedling': <FaSeedling />,
		'budding': <FaLeaf />,
		'evergreen': <FaTree />
	};
	return (
		<div className="post-summary" style={{ marginBottom: '3rem' }}>
			<Link to={slug}>{title}</Link>
			<div style={{display: 'flex', alignItems: 'center', marginTop: '0.5rem'}}>
				<span>{dateTended}</span>
				<div style={{marginLeft: '1rem'}}>
					{
						icons[growthState]
					}
				</div>
			</div>
		</div>
	);
};
const initialState = {"seedling": true, "budding": true, "evergreen": true};
const reducer = (state, action) => {
	switch (action.type) {
		case 'seedling':
			return {...state, 'seedling': !state['seedling']};
		case 'budding':
			return {...state, 'budding': !state['budding']};
		case 'evergreen':
			return {...state, 'evergreen': !state['evergreen']};
		default:
			throw new Error();
	}
};
const DigitalGarden = ({ data }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<Layout>
			<div className="page-body-container">
				<p className="page-header">Digital Garden</p>
				<p style={{ marginBottom: '3rem' }}>
					labore magna mollit voluptate id incididunt ut consequat amet enim consectetur sunt. fugiat minim
					laboris mollit adipisicing id mollit deserunt id qui eu sunt id culpa exercitation. occaecat officia
					ut nostrud magna et lorem voluptate magna laborum quis ex ut. magna excepteur qui ex mollit commodo.
				</p>
				<div className="post-filters">
					<ul className="post-filters__topic">tags here</ul>
					<ul className="post-filters__state">
						<li>
							<button onClick={() => dispatch({type: 'seedling'})}>Seedling</button>
						</li>
						<li>
							<button onClick={() => dispatch({type: 'budding'})}>Budding</button>
						</li>
						<li>
							<button onClick={() => dispatch({type: 'evergreen'})}>Evergreen</button>
						</li>
					</ul>
				</div>
				{/* <div classname="selected-state">
					<ul>
						{state.map((selectedstate, i) => <li key={i}>
							icons[selectedstate]
						</li>)}
					</ul>
				</div> */}
				<div className="post-list">
					{data.allFile.edges.map((edge, i) => (
						<PostSummary postDetails={edge} key={i} />
					))}
				</div>
			</div>
		</Layout>
	);
};

export default DigitalGarden;

export const query = graphql`
	query posts {
		allFile(
			filter: { sourceInstanceName: { eq: "content" }, dir: { regex: "/content/digital_garden/" } }
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
							datePlanted(formatString: "mm.dd.yy")
						}
					}
				}
			}
		}
	}
`;
