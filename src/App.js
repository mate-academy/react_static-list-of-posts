import React from 'react';

import './App.css';
import PostList from './components/PostList/PostList';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <PostList data={preparedPosts} />
);

export default App;
