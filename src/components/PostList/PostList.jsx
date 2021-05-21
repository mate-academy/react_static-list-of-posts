import React from 'react';
import PropTypes from 'prop-types';

import { Post } from '../Post/Post';

export const PostList = ({ preparedPosts }) => (
  <div className="post-list">
    {preparedPosts.map(post => (
      <Post {...post} />
    ))}
  </div>
);

PostList.propTypes = {
  preparedPosts: PropTypes.shape().isRequired,
};
