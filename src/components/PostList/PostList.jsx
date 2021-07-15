import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import { postTypes } from '../../types';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <ul className="container">
    {posts.map(post => (
      <li key={post.id} className="post">
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(postTypes).isRequired,
};
