import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { comment } from 'postcss';

const listOfPosts = posts.map(post => ({
  ...posts,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={listOfPosts} />
  </div>
);

export default App;
