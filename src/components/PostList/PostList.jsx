import React from 'react';
import PropTypes from 'prop-types';

import { Post } from '../Post';

import './PostList.scss';

export const PostList = ({ postList }) => (
  <ul className="post-list">
    {
      postList.map(post => (
        <li className="card" key={post.id}>
          <Post {...post} />
        </li>
      ))
    }
  </ul>
);

PostList.propTypes = {
  postList: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
  }).isRequired,
};
