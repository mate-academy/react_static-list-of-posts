import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList/PostList';

const compiledPosts = posts.map(post => ({
  ...post,
  user: users.find(person => person.id === post.userId),
  comments: comments.filter(item => item.postId === post.id),
}));

const App = () => (
  <PostList posts={compiledPosts} />
);

export default App;
