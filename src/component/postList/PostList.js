import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../postItem/Post';

export const PostList = ({ posts }) => (
  <ul className="posts-list">
    {posts.map(post => (
      <Post key={post.id} post={post} />
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(Object).isRequired,
};
