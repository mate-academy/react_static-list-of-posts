import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <div className="post-list">
    <ul className="post-list__list">
      {posts.map(post => (
        <li className="post-list__item" key={post.id}>
          <Post {...post} />
        </li>
      ))}
    </ul>
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({}).isRequired,
  ).isRequired,
};
