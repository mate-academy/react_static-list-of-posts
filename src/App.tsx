/* eslint-disable max-len */
import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
// import { title } from 'process';
import { PostList } from './components/PostList/PostList';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId) || null,
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="title is-1 has-text-centered">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
