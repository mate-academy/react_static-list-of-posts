import React from 'react';
import PostList from './PostList';
import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const App = () => (
  <div className="post">
    <h1 className="title">Static list of posts</h1>
    <PostList posts={posts} users={users} comments={comments} />
  </div>
);

export default App;
