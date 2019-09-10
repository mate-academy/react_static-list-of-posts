import React from 'react';
import './App.css';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import User from './components/User/User';
import Comment from './components/Comment/Comment';
import Post from './components/Post/Post';
import Postlist from './components/PostList/PostList';

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <div>
      <hr />
      user
      <User user={users[0]} />
      <hr />
      comment
      <Comment comment={comments[0]} />
      <hr />
      post
      <Post post={posts[0]} />
      <hr />
      comments
      <Postlist posts={posts} />
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
