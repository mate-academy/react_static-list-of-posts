import React from 'react';
import PropTypes from 'prop-types';

import './PostList.scss';

import { Post } from '../Post';

export const PostList = ({ posts }) => (
  <ul className="postlist">
    {
      posts.map(post => (
        <li className="postlist__item" key={post.id}>
          <Post {...post} />
        </li>
      ))
    }
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
