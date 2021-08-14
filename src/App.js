import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <p>
      <span>posts: </span>
      {posts.length}
    </p>
    <Post post={...posts}/>
    <p>
      <span>comments: </span>
      {comments.length}
    </p>
    <Comment comment={...comments} />
    <p>
      <span>Users: </span>
      {users.length}
    </p>
    <User user={...users} />
  </div>
);

export default App;
