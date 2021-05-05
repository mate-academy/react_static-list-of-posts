import React from 'react';
import posts from '../api/posts';
import comments from '../api/comments';
import users from '../api/users';
import Post from './Post';

function PostList() {
  return (
    posts.map( post =>{
     return <Post
      key={post.id}
      comments={comments}
      users={users}
      post={post}
    />
    })
  );
}

export default PostList;
