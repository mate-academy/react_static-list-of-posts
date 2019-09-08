import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostList from './components/PostList';

const App = () => (
  <div className="App">
    <header>
      <h1>Static list of posts</h1>
      <div className="HeaderCounters">
        <span>posts: </span>
        <span>{posts.length}</span>
        <span>comments: </span>
        <span>{comments.length}</span>
        <span>Users: </span>
        <span>{users.length}</span>
      </div>
    </header>

    <div>
      <PostList />
    </div>
  </div>
);

export default App;
