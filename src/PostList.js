import React from 'react';
// import PropTypes from 'prop-types';
import Post from './Post';

function PostList({ posts }) {
  return (
    <>
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </>
  )
}

export default PostList;
