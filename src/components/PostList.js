import React from 'react';

import Post from './Post';

// eslint-disable-next-line react/prop-types
function PostList({ posts }) {
  return (
    <>
      {posts.map(post => <Post post={post} key={post.id} />)}
    </>
  );
}

export default PostList;
