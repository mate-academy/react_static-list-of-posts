import React from 'react';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList/PostList';

const preparedPosts = posts.map(post => (
  {
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }));

const App = () => (
  <div className="App">
    <h1 className="App__header">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
