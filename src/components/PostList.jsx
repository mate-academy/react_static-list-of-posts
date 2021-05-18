import React from 'react';
import PropTypes from 'prop-types';

import { Post } from './Post';

export const PostList = ({ posts }) => (
  <ul className="post-list">
    {posts.map(post => (
      <li className="post-list__item post" key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
