import React from 'react';
import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostList from './components/PostList';

const postsWithUsers = posts.map((item) => {
  return {
    ...item,
    user: users.find(user => user.id === posts.userId),
  };
});

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <p>
      <span>posts: </span>
      {posts.length}

      <PostList
        items={postsWithUsers}
      />
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
