import React from 'react';

import './PostList.css';
import PostList from './PostList'

import posts from './api/posts';
import users from './api/users';
import comments from './api/comments';

const PostsWithUserAndComments = posts.map((post) => {
  return {
      ...post,
      userPost: users.find(user => user.id === post.userId),
      userComments: comments.filter(comment => post.id === comment.postId)
  };
});

function App() {
  return (
    <div >
      <PostList post = {PostsWithUserAndComments}/>
    </div>
  )
}

export default App;
