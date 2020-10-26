import React from 'react';
import PropTypes from 'prop-types';

import './PostList.scss';

import { Post } from '../Post';
import { PostPropTypes } from '../PropTypes/PostPropTypes';

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
    PropTypes.shape(PostPropTypes),
  ).isRequired,
};
