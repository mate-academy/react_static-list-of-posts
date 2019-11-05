import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import getTogether from './getTogether';
import GetUL from './GetUL';

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <p><span>posts: </span>{posts.length}</p>
    <p><span>comments: </span>{comments.length}</p>
    <p><span>Users: </span>{users.length}</p>
    <GetUL posts={getTogether(posts, users, comments)} />
  </div>
);

export default App;
