import React from 'react';
import Post from '../Post/Post';

const PostList = ({ posts }) => (
  <ul>
    { posts.map(post => <Post {...post} key={post.id}/>) }
  </ul>
);

export default PostList;
