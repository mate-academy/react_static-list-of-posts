import React from 'react';
import { PostList } from './components/PostList/PostList';
import './App.scss';
import { preparedPosts } from './api/preparedPosts';
// import posts from './api/posts';
// import comments from './api/comments';
// import users from './api/users';

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
