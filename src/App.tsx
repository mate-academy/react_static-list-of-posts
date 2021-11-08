import React from 'react';
import PostList from './components/PostList/PostList';
import './App.scss';

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList />
  </div>
);

export default App;
