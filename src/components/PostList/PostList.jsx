import React from 'react';
import PropTypes from 'prop-types';
import { postType } from '../../types';
import { Post } from '../Post';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <ul className="post-list">
    {posts.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(postType).isRequired,
};
