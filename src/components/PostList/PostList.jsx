import React from 'react';
import PropTypes from 'prop-types';
import { PostType } from '../../types';
import { Post } from '../Post';
import './postList.scss';

export const PostList = ({ posts }) => (
  <div className="postList container">
    {posts.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostType),
};

PostList.defaultProps = {
  posts: [],
};
