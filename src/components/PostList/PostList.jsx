import React from 'react';
import PropTypes from 'prop-types';
import './PostList.scss';
import { Post } from '../Post/Post';

export const PostList = ({ posts }) => (
  <>
    {posts.map(post => (
      <Post
        key={post.id}
        {...post}
      />
    ))}
  </>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
