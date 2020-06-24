import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import { PostTypes } from '../Shape/PostTypes';

export const PostList = ({ posts }) => (
  <ul className="post__list">
    {posts.map(post => (
      <li key={post.id} className="post__item">
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PostTypes,
  ).isRequired,
};
