import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostList from "./components/PostList"

const postsWithUsers = posts.map(post => {
  return {
    ...post, 
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => post.id === comment.postId)
  }
})

const App = () => (
  <div className="App">
    <h1 className='site__title'>Static list of posts</h1>

    <PostList 
      currentPosts={postsWithUsers}
    />

  </div>
);

export default App;
