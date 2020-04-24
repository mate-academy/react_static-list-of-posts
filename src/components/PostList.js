import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ posts }) => (
  <ul className="container">
    {posts.map(post => (
      <Post key={post.id} post={post} />
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
