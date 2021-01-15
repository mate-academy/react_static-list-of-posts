import React from 'react';
import PropTypes from 'prop-types';

import './PostList.scss';
import { Post } from '../Post';
import { PostTypes } from '../../type';

export const PostList = ({ posts }) => (
  <div className="post-list">
    {posts.map(post => (
      <div className="post-list__item" key={post.id}>
        <Post {...post} />
      </div>
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostTypes).isRequired,
};
