import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

const postsWithComments = posts.map(item => ({
  ...item,
  comment: comments.filter(comment => comment.postId === item.id),
}));

const preparedListOfPosts = postsWithComments.map(item => ({
  ...item,
  user: users.find(user => user.id === item.userId),
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

    <PostList posts={preparedListOfPosts} />
  </div>
);

export default App;
