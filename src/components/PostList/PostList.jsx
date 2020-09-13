import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';

import './PostList.css';

export const PostList = ({ lists }) => (
  <div className="post-list">
    {lists.map(list => (
      <Post key={list.id} {...list} />
    ))}
  </div>
);

PostList.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
};
