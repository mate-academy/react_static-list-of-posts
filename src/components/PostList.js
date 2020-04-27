import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ posts }) => (
  <ul className="posts">
    {posts.map(post => (
      <Post post={post} key={post.id} />
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default PostList;
