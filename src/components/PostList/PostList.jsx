import React from 'react';
import PropTypes from 'prop-types';
import './PostList.scss';
import { Post } from '../Post/Post';

export const PostList = ({ posts }) => (
  <ul className="postList">
    {posts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
