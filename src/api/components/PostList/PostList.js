import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';

export const PostList = ({ posts }) => (
  <div className="post__wrapper">
    {posts.map(post => (
      <Post key={post.id} post={post} />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
