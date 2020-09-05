import React from 'react';
import PropTypes from 'prop-types';

import './PostList.scss';

import { Post } from '../Post';

export const PostList = ({ posts }) => (
  <ul className="postList">
    {posts.map(post => (
      <li key={post.id} className="postList__post">
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
