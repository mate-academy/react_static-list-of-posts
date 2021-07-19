import React from 'react';

import './App.scss';

import posts from './api/posts';
import PostList from './components/PostList/PostList';

const App = () => (
  <div className="app">
    <h1 className="app__title">Static list of posts</h1>
    <PostList posts={posts} />
  </div>
);

export default App;
