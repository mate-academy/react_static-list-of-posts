import React from 'react';
import Post from './Post';

export default function PostList(props) {
  
  const posts = props.postsInfo.map(post => {
    return <Post postInfo={post} />;
  });
  return (
    posts
  );
}
