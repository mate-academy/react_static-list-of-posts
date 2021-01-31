import React from 'react';
import './App.scss';

import { PostList } from './components/PostList';

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList />
  </div>
);

export default App;
