import React from 'react';
import './PostList.scss';
import PropTypes from 'prop-types';
import { Post } from '../Post';

export const PostList = ({ entries }) => (
  <ul className="list">
    {entries.map(entry => (
      <li className="list__post" key={entry.id}>
        <Post {...entry} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
