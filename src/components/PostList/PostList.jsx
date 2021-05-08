import React from 'react';
import PropTypes from 'prop-types';

import { Post } from '../Post';

export const PostList = ({ posts }) => (
  <div className="post_list">
    {posts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

PostList.defaultProps = {
  posts: [],
};
