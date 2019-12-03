import React from 'react';

import './App.css';

import posts from './api/posts';
import PostList from './components/PostList';

const App = () => (
  <div className="App">
    <PostList posts={posts} />
  </div>
);

export default App;
