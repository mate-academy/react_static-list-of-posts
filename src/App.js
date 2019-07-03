import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostList from "./components/PostList"

const postsWithUsers = posts.map(post => {
  return {
    ...post,
    user: users.find(user => user.id === post.userId)
  }
})

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <PostList 
      posts={postsWithUsers}
    />

  </div>
);

export default App;
