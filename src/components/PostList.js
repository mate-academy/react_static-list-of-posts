import React from 'react';
import Post from './Post';

export default function PostList(props) {
  return props.postsInfo.map(post => {
    return <Post
        title={post.title}
        body={post.body}
        userInfo={post.userInfo}
        comments={post.comments}
        key={post.id}
      />
  });
  
}
