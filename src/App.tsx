import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList />
  </div>
);

export default App;
