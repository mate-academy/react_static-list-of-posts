import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './PostList/PostList';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(person => person.id === post.userId),
  comment: comments.filter(item => post.id === item.postId),
}));

const App = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
