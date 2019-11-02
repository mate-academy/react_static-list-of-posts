import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostList from './components/PostList/PostList';

const App = () => (
  <div className="App">
    <h1 className="title">Static list of posts</h1>

    <PostList posts={posts} comments={comments} users={users} />

  </div>
);

export default App;
