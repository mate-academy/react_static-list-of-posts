import React from 'react';
import './App.css';
import PostList from './component/PostList/PostList';
import postWithComentsUser from './api/postsWithCommentUser';

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={postWithComentsUser} />
  </div>
);

export default App;
