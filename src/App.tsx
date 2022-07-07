import React from 'react';

import './reset.scss';
import './App.scss';
import { PostList } from './components/PostList/PostList';

const App: React.FC = () => (
  <div className="App">
    <PostList />
  </div>
);

export default App;
