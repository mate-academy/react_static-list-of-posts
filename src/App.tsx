import React from 'react';
import { PostList } from './components/PostList/PostList';
import { preparedPosts } from './Variables/variables';

import './App.scss';
import comments from './api/comments';

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList postList={preparedPosts} comment={comments} />
  </div>
);

export default App;
