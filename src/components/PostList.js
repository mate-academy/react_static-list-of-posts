import React from 'react';

import posts from '../api/posts';
import Post from './Post';

function PostList() {
  return (
    posts.map(post => (
      <Post
        key={post.id}
        postId={post.id}
        userId={post.userId}
        title={post.title}
        body={post.body}
      />
    ))
  );
}

export default PostList;
