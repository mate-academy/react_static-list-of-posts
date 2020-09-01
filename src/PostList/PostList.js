import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import { PostShape } from '../PropTypes';

import './PostList.css';

export const PostList = ({ preparedList }) => (
  <ul className="postList">
    {preparedList.map(post => (
      <li className="post" key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  preparedList: PropTypes.arrayOf(PropTypes.shape(PostShape)).isRequired,
};
