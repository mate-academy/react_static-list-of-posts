import React from 'react';
import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostList from './PostList';

const getComment = postId => comments.find(comment => comment.id === postId);
const getUser = postId => users.find(user => user.id === postId);

const dataForPosts = posts.map(post => (
  {
    ...post,
    comment: getComment(post.id),
    user: getUser(post.userId),
  }));

const App = () => (
  <div className="App">
    <PostList post={dataForPosts} />
  </div>
);

export default App;
