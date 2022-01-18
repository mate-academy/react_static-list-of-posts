import React from 'react';
import './App.scss';

import { getPreparedPosts } from './api/loadData';
import { PostList } from './components/PostList';

const preparedPosts = getPreparedPosts();

// eslint-disable-next-line no-console
console.log(preparedPosts);

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
