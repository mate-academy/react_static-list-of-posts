import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import User from './User';
import Post from './Post';

const PostList = posts.map(item => ({
  ...item,
  users: users.find(itemId => (itemId.id === item.userId)),
  comments: comments.find(postId => (postId.postId === item.userId)),
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

    <ol>
      {PostList.map(item => (
        <li key={item.id}>
          <Post item={item} />
          <User item={item} />
        </li>
      ))}
    </ol>

  </div>
);

export default App;
