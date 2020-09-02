import React from 'react';
import PropTypes from 'prop-types';
import './PostList.scss';
import { Post } from '../Post/Post';

export const PostList = ({ posts }) => (
  <ul className="post-list">
    {posts.map(post => (
      <li className="post-item" key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
