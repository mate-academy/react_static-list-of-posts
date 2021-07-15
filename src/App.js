import React from 'react';
import { PostList } from './components/PostList/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const App = () => (
  <div className="App">
    <h1 className="title">Static list of posts</h1>
    <div className="container">
      <PostList posts={posts} users={users} comments={comments} />
    </div>
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
  </div>
);

export default App;
