import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import { postsType } from '../../Types/postsType';

import './PostList.scss';

export const PostList = ({ posts }) => (
  <div className="posts-list">
    {posts.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(postsType).isRequired,
};
