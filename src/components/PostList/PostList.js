import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import './PostList.css';

export const PostList = ({ postsList }) => (
  <div className="posts__wrapper">
    {postsList.map(post => (
      <Post
        {...post}
        key={post.id}
      />
    ))}
  </div>
);

PostList.propTypes = {
  postsList: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
