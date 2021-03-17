import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const data = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.userId),
}));

const App = () => (
  <div className="app">
    <h1 className="app__title">Static list of posts</h1>

    <PostList posts={data} />

    <p className="app__text">
      <span>Posts: </span>
      {posts.length}
    </p>

    <p className="app__text">
      <span>Comments: </span>
      {comments.length}
    </p>

    <p className="app__text">
      <span>Users: </span>
      {users.length}
    </p>
  </div>
);

export default App;
