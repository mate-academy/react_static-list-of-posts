import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';

export const PostList = ({ preparedPosts }) => (
  <div>
    {preparedPosts.map(post => (
      <Post id={post.id} {...post} />
    ))}
  </div>
);

PostList.propTypes = {
  preparedPosts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
