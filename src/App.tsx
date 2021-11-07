import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const preparedPosts = posts.map(post => (
  {
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }));

export const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList postItems={preparedPosts} />
  </div>
);
