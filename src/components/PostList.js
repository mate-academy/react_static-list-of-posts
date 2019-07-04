import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

function PostList({ currentPosts }) {
  return (
    <div>
      {currentPosts.map(post => (
        <Post currentPost={post} />
      ))}
    </div>
  );
}
PostList.propTypes = {
  currentPosts: PropTypes.shape({
    post: PropTypes.string.isRequired,
  }).isRequired,
};
export default PostList;
