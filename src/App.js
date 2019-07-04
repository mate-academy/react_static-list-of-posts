import React from 'react';

import './styles/App.css';
import PostList from './PostList';

const App = () => (
  <div className="app">
    <h1 className="app__name">List of posts</h1>
    <PostList />
  </div>
);

export default App;
