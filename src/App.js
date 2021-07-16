import React from 'react';
import './App.scss';
import { Posts } from './components/posts/posts';

const App = () => (
  <div className="app">
    <h1>Static list of posts</h1>
    <Posts />
  </div>
);

export default App;
