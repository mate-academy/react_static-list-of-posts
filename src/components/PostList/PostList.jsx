import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';

import './PostList.scss';

export const PostList = ({ preperedPosts }) => (
  <div className="post-list">
    {preperedPosts.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </div>
);

PostList.propTypes = {
  preperedPosts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
