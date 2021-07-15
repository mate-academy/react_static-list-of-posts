import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList
      posts={posts}
      users={users}
      comments={comments}
    />
  </div>
);

export default App;
