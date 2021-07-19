import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './PostList/PostList';

const App = () => (
  <div className="App">
    <PostList posts={posts} users={users} comments={comments} />
  </div>
);

export default App;
