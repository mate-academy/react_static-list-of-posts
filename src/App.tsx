import React from 'react';
import { PostList } from './components/PostList/PostList';
import { preparedPosts } from './Variables/variables';

import './App.scss';

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList postList={preparedPosts} />
  </div>
);

export default App;
