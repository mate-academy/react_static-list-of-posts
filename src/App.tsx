import React from 'react';

import './App.scss';

import { PostList } from './PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparePosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId) || null,
  comment: comments.filter(comment => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList preparePosts={preparePosts} />
  </div>
);

export default App;
