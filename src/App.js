import React from 'react';
import PostList from './components/PostList/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const App = () => (
  <div className="App">
    <PostList posts={posts} comments={comments} users={users} />
  </div>
);

export default App;
