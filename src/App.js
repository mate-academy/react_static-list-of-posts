import React from 'react';

import './App.scss';

import posts from './api/posts';
import { PostList } from './commponents/PostList/PostList';

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={posts} />
  </div>
);

export default App;
