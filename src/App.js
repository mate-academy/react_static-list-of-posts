import React from 'react';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import './App.scss';
import { PostList } from './components/index';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <PostList posts={preparedPosts} />
);

export default App;
