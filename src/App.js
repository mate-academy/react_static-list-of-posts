import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostsList } from './components/PostsList';

const postsList = posts.map(post => ({
  ...post,
  userName: users.find(user => user.id === post.userId).username,
  email: users.find(user => user.id === post.userId).email,
  address: users.find(user => user.id === post.userId).address,
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
    <PostsList posts={postsList} />
  </div>
);

export default App;
