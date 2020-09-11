import React from 'react';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

const App = () => (
  <div className="App">
    <h1 className="info">Static list of posts</h1>

    <p className="info">
      <span>posts: </span>
      {posts.length}
    </p>

    <p className="info">
      <span>comments: </span>
      {comments.length}
    </p>

    <p className="info">
      <span>Users: </span>
      {users.length}
    </p>
    <PostList posts={posts} comments={comments} users={users} />
  </div>
);

export default App;
