import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/postList';

const preparedData = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id),
  comments: comments.filter(comment => post.id === comment.postId),
}));

const App = () => (
  <div className="App d-flex flex-column align-items-center p-3 bg-light">
    <h1 className="display-1">Static list of posts</h1>

    <PostList data={preparedData} />
  </div>
);

export default App;
