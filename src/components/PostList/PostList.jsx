import React from 'react';
import './PostList.scss';
import PropTypes from 'prop-types';

import { Post } from '../Post';

export const PostList = ({ list }) => (
  <ul className="Post-list">
    {list.map(listItem => (
      <li key={listItem.id} className="Post-list__item">
        <Post {...listItem} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
