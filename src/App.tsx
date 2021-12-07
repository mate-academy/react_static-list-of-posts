import React from 'react';
import { preparedPosts } from './api/preparedPosts';

import './App.scss';
import { PostList } from './components/PostList';

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
