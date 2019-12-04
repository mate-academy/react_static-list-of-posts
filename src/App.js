import React from 'react';

import './App.css';

import posts from './api/posts';
import PostList from './PostList';

const App = () => (
  <PostList posts={posts} />
);

export default App;
