import React from 'react';
import { preparedPosts } from './api/PreparedPosts';
import 'bulma/css/bulma.min.css';
import './App.scss';
import { PostList } from './components/PostList';

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
