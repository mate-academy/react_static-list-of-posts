import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import './PostList.scss';

export const PostList = ({ file }) => (
  <ul className="list">
    {file.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </ul>
);

PostList.propTypes = {
  file: PropTypes.arrayOf(PropTypes.object).isRequired,
};
