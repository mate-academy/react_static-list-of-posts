import React from 'react';
import './PostsList.scss';

import Post from '../Post/Post';

function PostsList({ posts }) {
  return (
    <>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostsList;
