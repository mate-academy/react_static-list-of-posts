import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';

export const PostList = ({
  posts,
}) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      user: PropTypes.shape({}).isRequired,
      comments: PropTypes.arrayOf(
        PropTypes.shape({}),
      ).isRequired,
    }),
  ),
};

PostList.defaultProps = {
  posts: [],
};
