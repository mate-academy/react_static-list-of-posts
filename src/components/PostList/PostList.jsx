import React from 'react';
import PropTypes from 'prop-types';

import './postList.scss';
import { Post } from '../Post/Post';
import { postTypes } from '../../types';

export const PostList = ({ posts }) => (
  <div className="post-list">
    <ul className="post-list__list">
      {posts.map(post => (
        <li className="post-list__list-item" key={post.id}>
          <Post {...post} />
        </li>
      ))}
    </ul>
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(postTypes).isRequired,
};
