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
        }}
      >
        <small>
          {dateTended}&nbsp;&nbsp;{"|"}&nbsp;&nbsp;{growthState}&nbsp;&nbsp;
          {iconsMap[growthState]}
        </small>
        <br />
      </div>
    </div>
  );
};

const DigitalGarden = ({ data }) => {
  let tags = [];
  const growthStates = ["seedling", "budding", "evergreen"];
  data.allFile.edges.forEach((edge) => {
    tags = [
      ...new Set([...tags, ...edge.node.childMarkdownRemark.frontmatter.tags]),
    ];
  });
  tags = tags.sort();
  const initializeFilterState = (arr, initialState) =>
    arr.reduce((acc, curr) => ((acc[curr] = initialState), acc), {});
  const initialFilterState = {
    growthStates: initializeFilterState(growthStates, null),
    tags: initializeFilterState(tags, null),
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "growthStates":
        const isGrowthStateSelected = state.growthStates[action.payload];
        return {
          ...state,
          growthStates: {
            ...initializeFilterState(
              growthStates,
              isGrowthStateSelected ? null : false
            ),
            [action.payload]: isGrowthStateSelected
              ? null
              : !isGrowthStateSelected,
          },
        };
      case "tags":
        const isTagSelected = state.tags[action.payload];
        const currentlySelectedTags = { ...state.tags };
        for (const [key] of Object.entries(currentlySelectedTags)) {
          if (!state.tags[key]) {
            delete currentlySelectedTags[key];
          }
        }
        let isOnlyTagSelected = true;
        for (let key in state.tags) {
          if (
            state.tags.hasOwnProperty(key) &&
            state.tags[key] &&
            key !== action.payload
          ) {
            isOnlyTagSelected = false;
            break;
          }
        }

        const overwriteTags = () =>
          isTagSelected && isOnlyTagSelected
            ? initializeFilterState(tags, null)
            : initializeFilterState(tags, false);
        return {
          ...state,
          tags: {
            ...overwriteTags(),
            ...currentlySelectedTags,
            [action.payload]:
              isTagSelected && isOnlyTagSelected ? null : !isTagSelected,
          },
        };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, initialFilterState);
  const allPosts = data.allFile.edges;
  const filterPosts = (state, allPosts) => {
    return allPosts.filter((post) => {
      const { growthState, tags } = post.node.childMarkdownRemark.frontmatter;
      const growthStateMatch = state.growthStates[growthState] !== false;
      let tagsMatch = false;
      let i = 0;
      while (i < tags.length) {
        let currentTag = tags[i];
        if (state.tags[currentTag] !== false) {
          tagsMatch = true;
          break;
        }
        i++;
      }
      return tagsMatch && growthStateMatch;
    });
  };
  // if no filters just return all posts
  const filteredPosts = filterPosts(state, allPosts);
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
              <span
                key={i}
                onClick={() => dispatch({ type: "tags", payload: tag })}
                className={state.tags[tag] ? "selected" : "unselected"}
              >
                {tag}
              </span>
            ))}
          </ul>
          <ul className="post-filters__state">
            {growthStates.map((growthState, i) => (
              <span
                key={i}
                onClick={() =>
                  dispatch({ type: "growthStates", payload: growthState })
                }
                className={
                  state.growthStates[growthState] ? "selected" : "unselected"
                }
              >
                {growthState} {iconsMap[growthState]}
              </span>
            ))}
          </ul>
        </div>
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
