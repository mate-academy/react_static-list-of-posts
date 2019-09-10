import React from 'react';
import './App.css';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import User from './components/User/User';
import Comment from './components/Comment/Comment';
import Post from './components/Post/Post';

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <div>
      <hr />
      <User user={users[0]} />
      <hr />
      <Comment comment={comments[0]} />
      <hr />
      <Post post={posts[0]} />
      <hr />

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
