import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const postsWithComments = posts.map(post => ({
  ...post,
  comments: comments.filter(comment => comment.postId === post.id),
}));

const usersWithPosts = users.map(user => ({
  id: user.id,
  name: user.name,
  email: user.email,
  address: user.address,
  posts: postsWithComments.filter(post => post.userId === user.id),
}));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <PostList users={usersWithPosts} />

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
