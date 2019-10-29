import React from 'react';
import Post from '../Post/Post';

function PostList({ posts }) {
  return (
    <div className="ui card">
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostList;
