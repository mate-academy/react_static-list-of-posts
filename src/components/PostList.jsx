import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post'

export const PostList = ({ whole }) => (
  <ul className="ul">
    {whole.map(post => (
      <li key={post.id} className="li">
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  whole: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
