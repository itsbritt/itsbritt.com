// Gatsby
import { Link } from "gatsby";

// React
import React, { useReducer } from "react";

// Components
import Layout from "../components/Layout/Layout";

//Utils
import iconsMap from "../utils/iconsMap";

const PostSummary = ({ postDetails }) => {
  const {
    title,
    growthState,
    dateTended,
    tags,
  } = postDetails.node.childMarkdownRemark.frontmatter;
  const { slug } = postDetails.node.childMarkdownRemark.fields;
  return (
    <div className="post-summary" style={{ marginBottom: "2.75rem" }}>
      <Link to={slug}>{title}</Link>
      <div
        className="post-summary-data"
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "0.5rem",
          fontStyle: "italic",
        }}
      >
        <small>{dateTended}</small>
        <div style={{ marginLeft: "0.75rem" }}>{iconsMap[growthState]}</div>
      </div>
    </div>
  );
};
const initialState = { seedling: true, budding: true, evergreen: true };
const reducer = (state, action) => {
  switch (action.type) {
    case "seedling":
      return { ...state, seedling: !state["seedling"] };
    case "budding":
      return { ...state, budding: !state["budding"] };
    case "evergreen":
      return { ...state, evergreen: !state["evergreen"] };
    default:
      throw new Error();
  }
};
const DigitalGarden = ({ data }) => {
  let tags = [];
  const growthStates = ["seedling", "budding", "evergreen"];
  data.allFile.edges.forEach((edge) => {
    tags = [
      ...new Set([...tags, ...edge.node.childMarkdownRemark.frontmatter.tags]),
    ];
    //
    // let postTags = edge.node.childMarkdownRemark.frontmatter.tags;
    // tags = [...new Set([...tags, ...postTags])];
  });
  tags = tags.sort();
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Layout>
      <div className="page-body-container">
        <p className="page-header">Digital Garden</p>
        <p style={{ marginBottom: "3rem" }}>
          labore magna mollit voluptate id incididunt ut consequat amet enim
          consectetur sunt. fugiat minim laboris mollit adipisicing id mollit
          deserunt id qui eu sunt id culpa exercitation. occaecat officia ut
          nostrud magna et lorem voluptate magna laborum quis ex ut. magna
          excepteur qui ex mollit commodo.
        </p>
        <div className="post-filters">
          <ul className="post-filters__topic">
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </ul>
          <ul className="post-filters__state">
            {growthStates.map((growthState, i) => (
              <span key={i} onClick={() => dispatch({ growth: growthState })}>
                {growthState} {iconsMap[growthState]}
              </span>
            ))}
          </ul>
        </div>
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
  query allPosts {
    allFile(
      filter: {
        sourceInstanceName: { eq: "content" }
        relativeDirectory: { eq: "digital_garden" }
      }
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
