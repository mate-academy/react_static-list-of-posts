import React from 'react';
import PropTypes from 'prop-types';

import './PostList.css';
import { Post } from '../Post/Post';

export const PostList = ({ postsList }) => (
  <ul className="posts-list">
    {postsList.map(post => (
      <li key={post.id} className="posts-list__post">
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  postsList: PropTypes.arrayOf(PropTypes.any).isRequired,
};
