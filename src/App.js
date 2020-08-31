import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList/PostList';

const preparedPosts = posts.map(post => ({
  id: post.id,
  title: post.title,
  text: post.body,
  userNick: users[post.userId - 1].username,
  userName: users[post.userId - 1].name,
  userEmail: users[post.userId - 1].email,
  userCity: users[post.userId - 1].address.city,
  comments: comments.filter(comment => comment.postId === post.id),
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
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
