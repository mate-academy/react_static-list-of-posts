import React from 'react';
import propTypes from 'prop-types';

import { Post, postType } from '../Post/Post';

import './PostList.scss';

export const PostList = ({ posts }) => (
  <ul className="postList">
    {posts.map(post => (
      <li key={post.id}>
        <Post post={post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: propTypes.arrayOf(postType).isRequired,
};
