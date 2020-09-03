import React from 'react';
import PropTypes from 'prop-types';
import './PostList.scss';
import { Post } from '../Post';

export const PostList = ({ posts }) => (
  <div className="posts">
    {posts.map(post => (
      <div className="posts__post post" key={post.id}>
        <Post {...post} />
      </div>
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
