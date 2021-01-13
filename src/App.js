import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { Postlist } from './postlist/Postlist';

const database = posts.map(post => ({
  ...post,
  comments: comments.filter(com => com.postId === post.id),
  user: users.find(user => user.id === post.userId),
}));

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

    <Postlist data={database} />
  </div>
);

export default App;
