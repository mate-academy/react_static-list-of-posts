import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';

import './PostList.scss';

export const PostList = ({ postList }) => (
  <ul className="PostList">
    {postList.map(post => (
      <li key={post.id} className="PostList__item">
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  postList: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};
