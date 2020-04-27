import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import './PostList.css';

const PostList = ({ posts }) => (
  <div className="container">
    {posts.map(post => (
      <Post
        key={post.id}
        {...post}
      />
    ))}
  </div>
);

export default PostList;

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    body: PropTypes.bool.isRequired,
  })).isRequired,
};
