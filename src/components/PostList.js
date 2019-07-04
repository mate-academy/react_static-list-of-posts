import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

function PostList({ posts }) {
  return (
    <ul className="post-list">
      {posts.map(post => (
        <Post
          currentPost={post}
        />
      ))}
    </ul>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
