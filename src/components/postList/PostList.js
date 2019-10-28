import React from 'react';
import Post from '../post/Post';

const PostList = ({ posts }) => (
  <div>
    {posts.map(post => (<Post post={post} key={post.id} />))}
  </div>
);

export default PostList;
