import React from 'react';
import Post from '../Post/Post';

const PostList = ({ posts }) => (
  <>
    {posts.map(post => (
      <Post post={post} key={post.id} />
    ))}
  </>
);

export default PostList;
