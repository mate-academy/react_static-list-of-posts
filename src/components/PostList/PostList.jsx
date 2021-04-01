import React from 'react';
import PropTypes from 'prop-types';

import { Post } from '../Post';

export const PostList = ({ content }) => (
  <ul>
    {content.map(post => (
      <li key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
