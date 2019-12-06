import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './PostList';

const unitedBlock = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(commentId => commentId.postId === post.id),
}));

const App = () => (
  <PostList posts={unitedBlock} />
);

export default App;
