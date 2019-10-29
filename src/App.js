import React from 'react';
import './App.css';
import PostList from './components/PostList';
import posts from './api/posts';

const App = () => (
  <div className="App">
<PostList posts={posts} />
  </div>
);

export default App;
