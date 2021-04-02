import React from 'react';
import './PostList.scss';
import PropTypes from 'prop-types';

import { Post } from '../Post';

export const PostList = ({ posts }) => (
  <ul className="Post-list">
    {posts.map(listItem => (
      <li key={listItem.id} className="Post-list__item">
        <Post {...listItem} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
