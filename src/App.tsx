import React from 'react';

import { PostList } from './components/PostList/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(u => u.id === post.userId) || null,
  comments: comments.filter(c => c.postId === post.id),
}));

export const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList post={preparedPosts} />
  </div>
);
