import React from 'react';
import './PostList.css';
import Post from '../Post/Post';

function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostList;
