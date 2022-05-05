import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList/PostList';

export const preparedPosts = posts.map(post => (
  {
    ...post,
    comment: comments.filter(comment => post.id === comment.postId),
    user: users.find(user => user.id === post.userId) || null,
  }
));

const App: React.FC = () => (
  <div className="app">
    <h1 className="app__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
