import React from 'react';
import PostList from './components/PostList/PostList';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const userPosts = posts.map(post => ({
  ...post,
  comments: comments.filter(comment => post.id === comment.postId),
  user: users.find(user => post.userId === user.id),
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
    <PostList posts={userPosts} />
  </div>
);

export default App;
