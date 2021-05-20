import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';

export const PostList = ({ posts }) => (
  <ul className="ul">
    {posts.map(post => (
      <li key={post.id} className="li">
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
