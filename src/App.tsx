import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(u => u.id === post.userId) || null,
  comments: comments.filter(c => c.postId === post.id),
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
