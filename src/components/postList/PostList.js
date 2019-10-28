import React from 'react';
import Post from '../post/Post';

function PostList({ postInfo }) {
  return (
    <>
      {postInfo.map(post => (<Post post={post} key={post.id} />))}
    </>
  );
}

export default PostList;
