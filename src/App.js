import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <div className="page-content">
      <PostList
        users={users}
        posts={posts}
        comments={comments}
      />
    </div>
  </div>
);

export default App;
