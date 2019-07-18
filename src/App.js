import React from 'react';

import './App.css';
import comments from './api/comments';
import users from './api/users';
import posts from './api/posts';
import PostList from './components/PostList';

const prePost = posts.map(post => ({
  post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <main className="main">
    <PostList items={prePost} />
  </main>
);

export default App;
