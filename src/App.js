import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './PostList';

const postsWithCommentsAndUsers = posts.map(post => ({
  ...post,
  comments: comments.filter(comment => post.id === comment.postId),
  user: users.find(user => user.id === post.userId),
}));

const App = () => (
  <div className="App">
    <PostList post={postsWithCommentsAndUsers} />
  </div>
);

export default App;
