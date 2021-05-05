import React from 'react';

import './App.scss';

import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList';

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <div>
      <span>posts: </span>
      <PostList />
    </div>

    <p>
      <span>comments: </span>
      {comments.length}
    </p>

    <p>
      <span>Users: </span>
      {users.length}
    </p>
  </div>
);

export default App;
