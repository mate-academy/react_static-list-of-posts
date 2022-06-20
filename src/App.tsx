import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList/PostList';

const preparedPosts = posts.map(post => ({
  ...post,
  comments: comments.filter(comment => comment.postId === post.id),
  user: users.find(user => user.id === post.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
