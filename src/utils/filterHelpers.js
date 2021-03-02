// Get all tags of each post, create set to filter duplicates, and return sorted array of tags
export const filterTags = (edges) => {
  let tags = [];
  edges.forEach((edge) => {
    tags = [
      ...new Set([...tags, ...edge.node.childMarkdownRemark.frontmatter.tags]),
    ];
  });
  return tags.sort();
};

// Return array of posts that match selected filters (growthState & tags)
export const filterPosts = (state, allPosts) => {
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

export const initializeFilterState = (arr, initialState) =>
  arr.reduce((acc, curr) => ((acc[curr] = initialState), acc), {});

// Make copy of tags state
// Iterate through copy and delete all keys that have been set to false
export const currentlySelectedTags = (state) => {
  const currentTags = { ...state.tags };
  for (const [key] of Object.entries(currentTags)) {
    if (!state.tags[key]) {
      delete currentTags[key];
    }
  }
  return currentTags;
};

// Iterate through tags state and check whether the tag being selected is the only tag that is currently selected
export const isOnlySelectedTag = (state, action) => {
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
  return isOnlyTagSelected;
};
