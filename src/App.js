import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const App = () => (
  <div className="app">
    <h1 className="title">Static list of posts</h1>
    <PostList postList={posts} commentsList={comments} usersList={users} />
  </div>
);

export default App;
