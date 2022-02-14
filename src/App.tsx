/* eslint-disable no-console */
import React from 'react';
import posts from './api/posts';

import './App.scss';

import { PostList } from './components/PostList/PostList';

const App: React.FC = () => (
  <div className="App">
    <h1 className="post__main-title">Facebook (almost)</h1>
    <PostList posts={posts} />
  </div>
);

export default App;
