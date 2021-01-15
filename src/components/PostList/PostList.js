import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';

export const PostList = ({ prepPosts }) => (
  <>
    {prepPosts.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </>
);

PostList.propTypes = {
  prepPosts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,

  }).isRequired).isRequired,
};
