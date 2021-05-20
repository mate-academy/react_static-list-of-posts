import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';

export const PostsList = ({ posts }) => (
  posts.map(post => (
    <div key={post.id}>
      <Post {...post} />
    </div>
  ))
);

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })),
};
