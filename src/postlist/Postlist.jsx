import React from 'react';
import PropTypes from 'prop-types';
import './Postlist.scss';

import { Post } from '../post/Post';

export const Postlist = ({ data }) => (
  <ul className="post-list">
    {data.map(post => (
      <li key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

Postlist.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
