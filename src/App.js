import React from 'react';
import PostList from './components/PostList';

import './App.scss';

import posts from './api/posts';
import users from './api/users';
import comments from './api/comments';

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <p>
      <span>posts: </span>
      {posts.length}
    </p>

    <p>
      <span>comments: </span>
      {comments.length}
    </p>

    <p>
      <span>Users: </span>
      {users.length}
    </p>
    <PostList posts={posts} />
  </div>
);

export default App;
