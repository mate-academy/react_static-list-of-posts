import React from 'react';
import PropTypes from 'prop-types';

import { Post } from '../Post';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <ul className="posts">
    {posts.map(post => (
      <li className="posts__item" key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
