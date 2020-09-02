import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const file = posts.map(post => ({
  ...post,
  user: users.find(user => (user.id === post.userId)),
  replies: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <h1 className="title">Posts</h1>
    <PostList file={file} />
  </div>
);

export default App;
