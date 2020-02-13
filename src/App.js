import React from 'react';

import './App.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import { PostList } from './components/PostList/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const App = () => (
  <div className="App jumbotron">
    <h1>Static list of posts</h1>
    <PostList posts={posts} comments={comments} users={users} />
  </div>
);

export default App;
