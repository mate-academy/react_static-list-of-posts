import React from 'react';
import Post from '../post/Post';

function PostList({ postInfo }) {
  return (
    <div className="container">
      {postInfo.map(post => (<Post post={post} key={post.id} />))}
    </div>
  );
}

export default PostList;
