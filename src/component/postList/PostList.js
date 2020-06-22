import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../postItem/Post';
import { ShapePost } from '../Shapes/ShapePost';

export const PostList = ({ posts }) => (
  <ul className="posts-list">
    {posts.map(post => (
      <Post key={post.id} post={post} />
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(ShapePost).isRequired,
};
